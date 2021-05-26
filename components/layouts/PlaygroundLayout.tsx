import React from "react";
import BottomBar from "../editor/BottomBar";
import TopBar from "../editor/TopBar";

export const PlaygroundLayout = ({ children }) => {
  return (
    <div>
      <TopBar />
      <div
        style={{ height: "92vh" }}
        className=" flex flex-col bg-editor_secondary"
      >
        {children}
        <BottomBar />
      </div>
    </div>
  );
};
