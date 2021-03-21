import React from "react";
import Split from "react-split";

interface splitBoxProps {
  direction: "horizontal" | "vertical";
}

const SplitBox: React.FC<splitBoxProps> = ({ direction, children }) => {
  let splitProps;
  if (direction === "horizontal") {
    splitProps = {
      sizes: [25, 75],
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
    splitProps = {};
  }

  return (
    <Split className="editor-main " {...splitProps}>
      {children}
    </Split>
  );
};

export default SplitBox;
