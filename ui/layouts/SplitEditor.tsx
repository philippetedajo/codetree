import React from "react";
import Split from "react-split";
import { useAppSelector } from "../../store/hook";
import { editor_state } from "../../store/features/editorSlice";

type Props = {
  isVertical?: boolean;
  children?: React.ReactNode;
};

export const SplitEditor = ({ children, isVertical }: Props) => {
  const { isLogTabOpen } = useAppSelector(editor_state);

  let tabSize;

  if (isLogTabOpen) {
    tabSize = [100, 35];
  } else {
    tabSize = [100, 0];
  }

  return (
    <Split
      sizes={isVertical ? tabSize : [50, 50]}
      minSize={0}
      expandToMin={true}
      gutterSize={4}
      gutterAlign="center"
      snapOffset={30}
      dragInterval={1}
      direction={isVertical ? "vertical" : "horizontal"}
      cursor={isVertical ? "row-resize" : "col-resize"}
      className={`flex flex-grow  h-full w-full ${
        isVertical ? "flex-col" : ""
      }`}
    >
      {children}
    </Split>
  );
};
