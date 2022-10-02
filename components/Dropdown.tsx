import React, { ReactNode, useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import useOutsideRef from "../hooks/useOutsideRef";
import Router from "next/router";
import { useAppSelector } from "../store/hook";
import { theme_state } from "../store/features/themeSlice";

interface DropdownProps {
  trigger: ReactNode;
  children: ReactNode;
  classname: string;
}

export const Dropdown = ({ trigger, children, classname }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { theme } = useAppSelector(theme_state);

  const { isOutsideRef } = useOutsideRef(dropdownRef);

  useEffect(() => {
    if (isOutsideRef) {
      setIsOpen(false);
    }
  }, [isOutsideRef]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  Router.events.on("routeChangeStart", () => {
    setIsOpen(false);
  });

  const animation: Variants = {
    enter: {
      opacity: 1,
      scale: 1,
      transformOrigin: "top right",
      transition: {
        duration: 0.25,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      scale: 0.7,
      transformOrigin: "top right",
      transition: {
        duration: 0.2,
        delay: 0.1,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <div ref={dropdownRef}>
      <motion.div className="menu-item relative">
        <div className="cursor-pointer" onClick={toggleMenu}>
          {trigger}
        </div>

        <motion.div
          className={`${classname} absolute shadow rounded-lg z-50 mt-3 glassmorphism`}
          initial="exit"
          animate={isOpen ? "enter" : "exit"}
          variants={animation}
        >
          <div>{children}</div>
        </motion.div>
      </motion.div>
    </div>
  );
};
