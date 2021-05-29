import React from "react";

export const AuthLayout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col items-center pt-14">
      <div className="flex items-center justify-center">
        <img alt="Codetree" className="w-32" src="/identity/Codetree.png" />
      </div>
      {children}
    </div>
  );
};
