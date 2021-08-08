import React from "react";
import { ActiveLink } from "../ActiveLink";
import { AiOutlineRadiusSetting } from "react-icons/ai";
import { ImFilesEmpty } from "react-icons/im";

export const DashboardLayout: React.FC = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div className="border-r border-gray-800 w-60 flex flex-col justify-between fixed h-full">
        <div className="h-14 border-b border-gray-800 flex items-center px-5">
          p -- lastname
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
        <div className="h-20 border-t border-gray-800 px-5">
          <div className="mt-4 text-sm">Feedback and support</div>
          <div className="mt-1 text-sm">Community</div>
        </div>
      </div>

      <div className="w-full">{children}</div>
    </div>
  );
};

export default DashboardLayout;
