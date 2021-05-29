import React from "react";
import NavigationBar from "../site/NavigationBar";
import { useUser } from "../../hooks";

export const StandardLayout = ({ children }) => {
  return (
    <div>
      <NavigationBar />
      {children}
    </div>
  );
};
