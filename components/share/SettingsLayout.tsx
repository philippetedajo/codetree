import Link from "next/link";
import Router from "next/router";
import {
  UserCircleIcon,
  ShieldCheckIcon,
  MailIcon,
  ChevronLeftIcon,
} from "@heroicons/react/outline";

export const SettingsLayout = ({ children }) => {
  return (
    <div className="pt-4 sm:pt-8 px-3 lg:px-24 flex flex-col sm:flex-row">
      <nav className="sm:w-56 sm:pt-5">
        <ChevronLeftIcon
          onClick={() => Router.push("/profile")}
          className="w-5 h-5 text-3xl mb-5 sm:mb-4 cursor-pointer"
        />

        <div className="flex flex-row sm:pl-10 sm:flex-col justify-around sm:justify-start ">
          <Link href="/settings">
            <a className="flex items-center sm:mb-4">
              <UserCircleIcon className="w-7 h-7 mr-2" />
              <div className="hidden sm:block">Profile</div>
            </a>
          </Link>
          <Link href="/settings/password">
            <a className="flex items-center sm:mb-4">
              <ShieldCheckIcon className="w-7 h-7 mr-2" />
              <div className="hidden sm:block">Password</div>
            </a>
          </Link>
          <Link href="/settings/email">
            <a className="flex items-center sm:mb-4">
              <MailIcon className="w-7 h-7 mr-2" />
              <div className="hidden sm:block">Email</div>
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
