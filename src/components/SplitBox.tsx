import React from "react";
import Split from "react-split";
import { SplitBoxProps } from "../_types";

const SplitBox: React.FC<SplitBoxProps> = ({ direction, children }) => {
  let splitProps;
  if (direction === "horizontal") {
    splitProps = {
      className: "editor-main-horizontal",
      minSize: 100,
      expandToMin: false,
      gutterSize: 7,
      gutterAlign: "center",
      snapOffset: 30,
      dragInterval: 1,
      direction: "horizontal",
      cursor: "col-resize",
    };
  } else {
    splitProps = {
      className: "editor-main-vertical",
      minSize: 50,
      expandToMin: false,
      gutterSize: 7,
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
