import React from "react";
import NavigationBar from "../site/NavigationBar";
import { useUser } from "../../hooks";

export const StandardLayout = ({ children }) => {
  return (
    <div>
      <NavigationBar />
      <div className="pt-20">{children}</div>
    </div>
  );
};
