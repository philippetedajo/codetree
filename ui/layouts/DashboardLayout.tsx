import React from "react";
import Image from "next/image";
import Link from "next/link";

export const DashboardLayout: React.FC = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div className="border-r border-black w-60 flex flex-col justify-between">
        <div className="h-14 border-b border-black flex items-center px-5">
          p -- lastname
        </div>
        <nav className="flex-1">
          <ul className="mt-5 px-3 flex flex-col space-y-2">
            <Link href="/dashboard">
              <a className="dashboard-link">Home</a>
            </Link>

            <Link href="/dashboard/settings">
              <a className="dashboard-link">Settings</a>
            </Link>
          </ul>
        </nav>
        <div className="h-20 border-t border-black px-5">
          <div className="mt-4 text-sm">Feedback and support</div>
          <div className="mt-1 text-sm">Community</div>
        </div>
      </div>

      <div className="w-full">{children}</div>
    </div>
  );
};

export default DashboardLayout;
