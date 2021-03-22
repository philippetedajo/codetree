import React from "react";
import Split from "react-split";
import "./styles/split-box.css";

interface splitBoxProps {
  direction: "horizontal" | "vertical";
}

const SplitBox: React.FC<splitBoxProps> = ({ direction, children }) => {
  let splitProps;
  if (direction === "horizontal") {
    splitProps = {
      className: "editor-main-horizontal",
      sizes: [50, 75],
      minSize: 100,
      expandToMin: false,
      gutterSize: 10,
      gutterAlign: "center",
      snapOffset: 30,
      dragInterval: 1,
      direction: "horizontal",
      cursor: "col-resize",
    };
  } else {
    splitProps = {
      className: "editor-main-vertical",
      expandToMin: true,
      gutterSize: 10,
      gutterAlign: "center",
      snapOffset: 30,
      dragInterval: 1,
      direction: "vertical",
      cursor: "row-resize",
    };
  }

  return <Split {...splitProps}>{children}</Split>;
};

export default SplitBox;
