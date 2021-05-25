import React from "react";

export const AuthLayout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col items-center pt-14">
      <div className="border w-24 h-20 flex items-center justify-center">
        LOGO
      </div>
      {children}
    </div>
  );
};
