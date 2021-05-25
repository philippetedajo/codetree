import React from "react";
import { checkSession, withSession } from "../../utils";

export const PlaygroundLayout = ({ children }) => {
  return (
    <div>
      <div>Playground Layout</div>
      {children}
    </div>
  );
};
