import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { fetcher } from "../../utils";
import Router, { useRouter } from "next/router";
import { useUser } from "../../hooks";
import { LogoutIcon, UserIcon, TerminalIcon } from "@heroicons/react/outline";
import { menu, text_reveal } from "../../utils/framer-animation";
import { motion } from "framer-motion";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavigationBar() {
  const { user, mutateUser } = useUser();
  const router = useRouter();

  const logout = async () => {
    await mutateUser(fetcher("/api/auth/logout", "POST"), false);
    Router.push("/auth/login");
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={menu}
      style={{ height: "8vh" }}
      className="px-3 sm:px-7 flex justify-between items-center"
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
              <Menu
                as="div"
                className="relative inline-block text-left z-10 bg-transparent"
              >
                {({ open }) => (
                  <>
                    <div>
                      <Menu.Button className="pt-1 inline-flex justify-center items-center w-full border-gray-300 px-4 bg-white text-sm font-medium text-gray-700 focus:outline-none  ">
                        <div
                          style={{ height: 40, width: 40 }}
                          className="rounded-full shadow-lg"
                        >
                          <Image
                            height={40}
                            width={40}
                            src="/fake/profile6.png"
                            alt="Profile image"
                          />
                        </div>
                        <ChevronDownIcon
                          className="-mr-1 ml-2 h-5 w-5 text-gray-500"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>

                    <Transition
                      show={open}
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items
                        static
                        className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
                      >
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm cursor-pointer flex items-center"
                                )}
                                onClick={() => Router.push("/playground")}
                              >
                                <TerminalIcon
                                  className="h-5 w-5 mr-1 text-gray-500"
                                  aria-hidden="true"
                                />{" "}
                                Playground
                              </a>
                            )}
                          </Menu.Item>
                        </div>

                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm cursor-pointer flex items-center"
                                )}
                                onClick={() => Router.push("/profile")}
                              >
                                <UserIcon
                                  className="h-5 w-5 mr-1 text-gray-500"
                                  aria-hidden="true"
                                />
                                Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                onClick={logout}
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm cursor-pointer flex items-center"
                                )}
                              >
                                <LogoutIcon
                                  className="h-5 w-5 mr-1 text-gray-500"
                                  aria-hidden="true"
                                />
                                Logout
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
            </div>
          )}
      </motion.div>
    </motion.div>
  );
}
