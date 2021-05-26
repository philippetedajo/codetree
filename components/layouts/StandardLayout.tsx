import React from "react";
import NavigationBar from "../site/NavigationBar";

export const StandardLayout = ({ children }) => {
  return (
    <div>
      <NavigationBar />
      {children}
    </div>
  );
};
