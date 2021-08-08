import React from "react";
import Image from "next/image";
import Link from "next/link";

export const DashboardLayout: React.FC = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div className="border-r border-black w-60 flex flex-col justify-between">
        <div className="h-14 border-b border-black flex items-center px-2">
          <Image
            className="inline object-cover rounded-full"
            height={37}
            width={37}
            src="https://www.themebeta.com/files/picture/201809/22/2e46496b0393fb96e6eb349e674553c4.jpeg"
            alt="Profile image"
          />
        </div>
        <nav className="flex-1">
          <ul className="pt-5 px-3 flex flex-col space-y-2">
            <Link href="/dashboard">
              <a className="dashboard-link">Home</a>
            </Link>

            <Link href="/dashboard/settings">
              <a className="dashboard-link">Settings</a>
            </Link>
          </ul>
        </nav>
        <div className="h-20 border-t border-black">Feedback and support</div>
      </div>

      <div className="w-full">{children}</div>
    </div>
  );
};

export default DashboardLayout;
