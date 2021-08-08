import React from "react";

export const DashboardLayout: React.FC = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div className="border-r border-black w-60 flex flex-col justify-between">
        <div className="h-12 border-b border-black">Profile</div>
        <div>Side content</div>
        <div className="h-20 border-t border-black">Feedback and support</div>
      </div>

      <div className="w-full">
        {/*<div className="h-12 border-b border-black">Home</div>*/}
        {/*<div>HomeContent</div>*/}
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
