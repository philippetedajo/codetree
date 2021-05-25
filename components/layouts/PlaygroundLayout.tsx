import React from "react";
import { motion } from "framer-motion";
import { menu, text_reveal } from "../../utils/framer-animation";
import Link from "next/link";
import BottomBar from "../editor/BottomBar";

export const PlaygroundLayout = ({ children }) => {
  return (
    <div>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={menu}
        style={{ height: "8vh" }}
        className="px-3 sm:px-7 flex justify-between items-center"
      >
        <motion.div variants={text_reveal}>
          <Link href="/">
            <a className="text-2xl">Codetree</a>
          </Link>
        </motion.div>
        <motion.div variants={text_reveal} className="flex items-center">
          Dropdown option here
        </motion.div>
      </motion.div>

      <div
        style={{ height: "92vh" }}
        className=" flex flex-col bg-editor_secondary"
      >
        {children}
        <BottomBar />
      </div>
    </div>
  );
};
