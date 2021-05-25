import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { menu, text_reveal } from "../../utils/framer-animation";
import Dropdown from "../site/Dropdown";
import { useUser } from "../../hooks";

export const StandardLayout = ({ children }) => {
  const { user } = useUser();
  const router = useRouter();

  return (
    <div>
      {/*    =================================    */}
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={menu}
        style={{ height: "8vh" }}
        className="w-full cursor-pointer px-3 sm:px-7  flex justify-between items-center"
      >
        {/*===================================Left side=============================================*/}
        <motion.div variants={text_reveal}>
          <Link href="/">
            <a className="text-2xl">Codetree</a>
          </Link>
        </motion.div>

        {/*=====================================Right side===========================================*/}
        <motion.div variants={text_reveal} className="flex items-center">
          {/* User is not login and is not on register or login page */}
          {!user?.isLoggedIn &&
            router.pathname !== "/auth/register" &&
            router.pathname !== "/auth/login" && (
              <div>
                <Link href="/auth/login">
                  <a className="mr-5">Login</a>
                </Link>{" "}
                <Link href="/auth/register">
                  <a className="mr-5">Register</a>
                </Link>
              </div>
            )}

          {/* User is login and is not on register or login page */}
          {user?.isLoggedIn &&
            router.pathname !== "/auth/register" &&
            router.pathname !== "/auth/login" && (
              <div className="flex items-center">
                <div className="flex flex-col text-right">
                  <div>{user?.data.name}</div>
                  <small className="text-gray-500">Engineer</small>
                </div>
                <Dropdown />
              </div>
            )}
        </motion.div>
      </motion.div>
      {children}
    </div>
  );
};
