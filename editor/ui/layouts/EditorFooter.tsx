import React from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import {
  toggle_logs_tab,
  editor_state,
} from "../../../store/features/editorSlice";
import { compiler_state } from "../../../store/features/compilerSlice";
import { FiTerminal } from "react-icons/fi";

interface FooterProps {
  isCompiling: boolean;
  logs: any;
}

export const Footer = ({ isCompiling, logs }: FooterProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="h-7 flex items-center justify-between bg-tree-hard border-t-2 border-black text-gray-300 pl-5 pb-0.5 flex-shrink-0 z-50">
      <div className="flex items-center">
        <a
          href="https://github.com/philippetedajo/Codetree"
          target="_blank"
          rel="noreferrer"
          className="flex mr-3 hover:text-green-500 text-sm"
        >
          Built with
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

        {isCompiling && (
          <div className="ml-10">
            <span className="loader --1" />
          </div>
        )}
      </div>

      <div className="flex justify-center items-center">
        <div
          onClick={() => dispatch(toggle_logs_tab())}
          className="flex items-center cursor-pointer"
        >
          <FiTerminal size={18} className="mr-1 " /> Console
        </div>

        <div className="ml-2  w-6">
          {logs.length > 0 && (
            <div className="h-5 w-5 flex justify-center items-center">
              <div className="absolute p-1.5 bg-green-400 rounded-full animate-ping" />
              <div className="absolute p-1 bg-green-400  border-white rounded-full" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const EditorFooter = React.memo(Footer);
