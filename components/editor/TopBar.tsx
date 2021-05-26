import React from "react";
import { motion } from "framer-motion";
import { menu, text_reveal } from "../../utils/framer-animation";
import Link from "next/link";
import { useUser } from "../../hooks";
import { useRouter } from "next/router";

const TopBar = () => {
  const { user } = useUser();
  const router = useRouter();

  return (
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
        all editor option
      </motion.div>
    </motion.div>
  );
};

export default TopBar;
