import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import {
  toggle_logs_tab,
  editor_state,
} from "../../store/features/editorSlice";
import { compiler_state } from "../../store/features/compilerSlice";
import { FiTerminal } from "react-icons/fi";

export const Footer = () => {
  return (
    <div className="h-7 flex items-center justify-between bg-tree-hard border-t-2 border-black text-gray-300 px-5 pb-0.5 flex-shrink-0 z-50">
      <div className="flex items-center">
        <a
          href="https://github.com/philippetedajo/Codetree"
          target="_blank"
          rel="noreferrer"
          className="flex mr-3 hover:text-green-500 text-sm"
        >
          Built with{" "}
          <img
            alt="Web-assembly-logo"
            src="/icons/heart-arrow.svg"
            className="h-4 w-4 mx-2"
          />{" "}
          and{" "}
          <img
            alt="Web-assembly-logo"
            src="/icons/web-assembly.svg"
            className="h-4 w-4 mx-2"
          />
        </a>
      </div>

      <div className="flex justify-center items-center" />
    </div>
  );
};

export const EditorFooter = React.memo(Footer);
