import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { fetcher } from "../../utils";
import Router from "next/router";
import { useUser } from "../../hooks";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dropdown() {
  const { mutateUser } = useUser();

  const logout = async () => {
    await mutateUser(fetcher("/api/auth/logout", "POST"));
    Router.push("/auth/login");
  };

  return (
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
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                      onClick={() => Router.push("/profile")}
                    >
                      Profile
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                      onClick={() => Router.push("/playground")}
                    >
                      Playground
                    </a>
                  )}
                </Menu.Item>
              </div>

              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      onClick={logout}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
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
  );
}
