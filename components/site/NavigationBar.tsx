import React, { Fragment } from "react";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useTheme } from "next-themes";
import { LogoutIcon, UserIcon, TerminalIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { FaRegMoon } from "react-icons/fa";
import { SunIcon, StarIcon } from "@heroicons/react/solid";
import { SkeletonMinProfile } from "../Skeleton";

import { fetcher } from "../../utils";
import Router, { useRouter } from "next/router";
import { useUser } from "../../hooks";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavigationBar() {
  const { user, mutateUser } = useUser();

  const router = useRouter();

  const logout = async () => {
    await mutateUser(fetcher("/api/auth/logout", "POST"));
    await Router.push("/auth/login");
  };

  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const generatePlayground = () => {
    const url = `${process.env.NEXT_PUBLIC_CODETREE_API}/tree/create`;
    // create a new tree
    //
    // setLoading(true);
    //
    // const result = await fetcher(url, "POST", user.token, {});
    //
    // setLoading(false);

    //redirect to the fresh created tree
    // Router.push(`playground/${hash}`)
  };

  return (
    <div
      style={{ height: "8vh" }}
      className="fixed w-full bg-white opacity-90 dark:bg-black px-2 sm:px-7 flex justify-between items-center shadow-lg"
    >
      {/*===================================Left side=============================================*/}
      <div>
        <Link href="/">
          <div className="flex justify-center items-end cursor-pointer">
            <img alt="Codetree" className="w-12" src="/identity/Codetree.png" />
          </div>
        </Link>
      </div>

      {/*=====================================Right side===========================================*/}
      <div className="flex items-center">
        <div
          className="mr-4 flex cursor-pointer hidden sm:block"
          onClick={toggleTheme}
        >
          {theme === "light" ? (
            <FaRegMoon className="w-5 h-5 text-gray-500" />
          ) : theme === "dark" ? (
            <SunIcon className="w-6 h-6" />
          ) : (
            <FaRegMoon className="w-5 h-5 text-gray-500" />
          )}
        </div>

        {/* User is not login and on homepage  =========================================== */}
        {!user?.isLoggedIn && router.pathname === "/" && (
          <div className="flex justify-center items-center">
            <Link href="/playground/new">
              <a className="nav_item">Playground</a>
            </Link>
            <Link href="/auth/login">
              <a className="nav_item">Login</a>
            </Link>{" "}
            <Link href="/auth/register">
              <div className="flex justify-center items-center text-sm font-medium hover:bg-green-500 bg-green-400 px-4 py-1.5 rounded text-black tracking-wide cursor-pointer">
                <div className="hidden sm:block">
                  <StarIcon className="w-5 h-5 mr-1.5" />
                </div>
                <a className="text-center text-sm">SIGN UP FREE</a>
              </div>
            </Link>
          </div>
        )}

        {!user?.isLoggedIn && router.pathname !== "/" && <SkeletonMinProfile />}

        {/* User is login and is not on register or login page =========================================== */}
        {user?.isLoggedIn && (
          <div className="flex items-center">
            <div className="flex flex-col text-right">
              <div>{user?.profile?.data?.username}</div>
              <small className="text-gray-500">
                {user?.profile?.data?.status}
              </small>
            </div>
            <Menu
              as="div"
              className="relative inline-block text-left z-10 bg-transparent"
            >
              {({ open }) => (
                <>
                  <div>
                    <Menu.Button className="bg-transparent pt-1 inline-flex justify-center items-center w-full border-gray-300 px-4 bg-white text-sm font-medium text-gray-700 focus:outline-none  ">
                      <img
                        className="rounded-full w-10 h-10 object-cover shadow-lg"
                        src={
                          user?.profile?.data?.profile || "/blank-profile.png"
                        }
                        alt="Profile image"
                      />

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
                              onClick={generatePlayground}
                            >
                              <TerminalIcon
                                className="h-5 w-5 mr-1 text-gray-500"
                                aria-hidden="true"
                              />{" "}
                              New
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
      </div>
    </div>
  );
}
