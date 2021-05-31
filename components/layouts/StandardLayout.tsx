import React from "react";
import NavigationBar from "../site/NavigationBar";

export const StandardLayout = ({ children }) => {
  return (
    <div>
      <NavigationBar />
      <div>{children}</div>
    </div>
  );
};
