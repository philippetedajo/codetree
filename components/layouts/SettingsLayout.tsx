import { useState } from "react";
import Link from "next/link";
import Router from "next/router";
import {
  UserCircleIcon,
  ShieldCheckIcon,
  MailIcon,
  ChevronLeftIcon,
  CameraIcon,
} from "@heroicons/react/outline";
import ImageUploader from "react-images-upload";

export const SettingsLayout = ({ children }) => {
  return (
    <div className="pt-4 sm:pt-8 px-3 lg:px-24 flex flex-col sm:flex-row">
      <nav className="sm:w-72 sm:pt-5">
        <ChevronLeftIcon
          onClick={() => Router.push("/profile")}
          className="w-5 h-5 text-3xl mb-5 sm:mb-4 cursor-pointer"
        />

        <div className="flex flex-row sm:pl-10 sm:flex-col justify-around sm:justify-start ">
          <div
            style={{ paddingBottom: "1px" }}
            className="w-40 h-40 p-0.5 relative inline-block sm:mb-24 bg-gradient-to-b from-gray-400 to-pink-300 rounded-full mr-5 shadow-lg"
          >
            <img
              className="rounded-full w-40 h-40"
              src="/fake/profile6.png"
              alt="Profile image"
            />

            <div className="file-upload">
              <input type="file" />
              <CameraIcon className="w-5 h-5 cursor-pointer" />
            </div>
          </div>

          <Link href="/settings">
            <a className="flex items-center sm:mb-4">
              <UserCircleIcon className="w-7 h-7 mr-2" />
              <div className="hidden sm:block">Profile</div>
            </a>
          </Link>
          <Link href="/settings/email">
            <a className="flex items-center sm:mb-4">
              <MailIcon className="w-7 h-7 mr-2" />
              <div className="hidden sm:block">Email</div>
            </a>
          </Link>
          <Link href="/settings/password">
            <a className="flex items-center sm:mb-4">
              <ShieldCheckIcon className="w-7 h-7 mr-2" />
              <div className="hidden sm:block">Password</div>
            </a>
          </Link>
        </div>
      </nav>
      <div className="sm:w-full flex justify-center sm:justify-start sm:pl-10">
        {children}
      </div>
    </div>
  );
};
