import React from "react";
import { ActiveLink } from "../ActiveLink";
import { AiOutlineRadiusSetting } from "react-icons/ai";
import { ImFilesEmpty } from "react-icons/im";
import Image from "next/image";
import { useSession } from "next-auth/client";
import Link from "next/link";

export const DashboardLayout: React.FC = ({ children }) => {
  const [session, isLoading] = useSession();

  return (
    <div className="flex h-screen">
      <div className="border-r border-black w-60 flex flex-col justify-between h-full fixed">
        <div className="h-14 border-b border-black flex items-center px-5">
          {isLoading ? (
            "loading..."
          ) : (
            <Link href="/">
              <a className="mr-4 flex items-center">
                <Image
                  src={`${session?.user?.image}`}
                  width={40}
                  height={40}
                  className="rounded-full"
                  alt="avatar"
                />
                <span className="ml-3 text-gray-500">
                  {session?.user?.name}
                </span>
              </a>
            </Link>
          )}
        </div>
        <nav className="flex-1">
          <ul className="mt-5 px-3 flex flex-col space-y-2 text-sm">
            <ActiveLink
              activeClassName="dashboard-link-active"
              href="/dashboard"
            >
              <div className="dashboard-link">
                <ImFilesEmpty size={15} className="mr-1.5" />
                <a>Projects</a>
              </div>
            </ActiveLink>

            <ActiveLink
              activeClassName="dashboard-link-active"
              href="/dashboard/settings"
            >
              <div className="dashboard-link">
                <AiOutlineRadiusSetting size={17} className="mr-1.5" />
                <a>Settings</a>
              </div>
            </ActiveLink>
          </ul>
        </nav>
        <div className="h-20 border-t border-black px-5">
          <div className="mt-4 text-sm">Feedback and support</div>
          <div className="mt-1 text-sm">Community</div>
        </div>
      </div>

      <div className="pl-60">{children}</div>
    </div>
  );
};

export default DashboardLayout;
