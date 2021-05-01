import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

function Dropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-20">
      <button
        className="border-2 w-40 flex items-center focus:outline-none h-10 px-3"
        onClick={() => setOpen(!open)}
      >
        {/*{activeIcon} <span className="ml-4">{activeItem}</span>*/} drop
      </button>

      <AnimatePresence>{open ? <Drop /> : ""}</AnimatePresence>
    </div>
  );
}

export default Dropdown;

const Drop = () => {
  const DropdownItem = ({ children, icon }) => {
    return (
      <div className="flex items-center h-10 px-3 hover:bg-blue-100 cursor-pointer">
        <div className="mr-3 flex items-center">{icon}</div>
        <div> {children}</div>
      </div>
    );
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        translateY: 15,
      }}
      exit={{
        opacity: 0,
        translateY: -1,
      }}
      className="dropdown w-40 border-2"
    >
      <DropdownItem
        icon={
          <Image
            src="/icons/vanilla.svg"
            alt="vanilla js"
            width={25}
            height={25}
          />
        }
      >
        Vanilla
      </DropdownItem>
      <DropdownItem
        icon={
          <Image
            src="/icons/reactjs.svg"
            alt="react js"
            width={30}
            height={30}
          />
        }
      >
        React
      </DropdownItem>
      <DropdownItem
        icon={
          <Image
            src="/icons/p5-dot-js.svg"
            alt="p5 js"
            width={30}
            height={30}
          />
        }
      >
        P5
      </DropdownItem>
    </motion.div>
  );
};
