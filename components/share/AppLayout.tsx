import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
import { XIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import {
  beta_bar,
  beta_bar_text,
  menu,
  text_reveal,
} from "../../utils/framer-animation";
import Dropdown from "./Dropdown";
import { useUser } from "../../hooks";
import { ToastContainer } from "react-toastify";

export const AppLayout = ({ children }) => {
  const { user } = useUser();
  const router = useRouter();

  return (
    <div>
      <ToastContainer hideProgressBar={true} autoClose={8000} />
      {/* =================beta bar================ */}

      {router.pathname !== "/playground" && (
        <motion.div
          initial="initial"
          animate="animate"
          variants={beta_bar}
          className="flex justify-center mb-2 px-5 py-1 items-center text-white shadow-lg bg-gradient-to-l from-blue-600 to-blue-700 "
        >
          <motion.div
            variants={beta_bar_text}
            className="flex text-sm text-gray-100"
          >
            Beta 1.1 🌱:
            <a
              className="ml-1 hover:text-gray-300 h-full flex items-center"
              href="https://github.com/philippetedajo/Codetree"
              target="_blank"
              rel="noreferrer"
            >
              Support us by leaving a star on Github
            </a>
          </motion.div>
        </motion.div>
      )}

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

          {/* User is on login page */}
          {router.pathname == "/auth/login" && (
            <div className="flex items-center">
              <div className="mr-2 text-gray-500">New to Codetree ?</div>
              <Link href="/auth/register">
                <a className="text-green-500"> Join us</a>
              </Link>
            </div>
          )}

          {/* User is on register page */}
          {router.pathname == "/auth/register" && (
            <div className="flex items-center">
              <div className="mr-2 text-gray-500">Already with us ?</div>
              <Link href="/auth/login">
                <a className="text-green-500 ">Login</a>
              </Link>
            </div>
          )}
        </motion.div>
      </motion.div>
      {children}
    </div>
  );
};
