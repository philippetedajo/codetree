import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import {
  toggle_logs_tab,
  editor_state,
} from "../../store/features/editorSlice";
import { compiler_state } from "../../store/features/compilerSlice";
import { FiTerminal } from "react-icons/fi";

export const Footer = ({ logs, isCompiling }: any) => {
  const dispatch = useAppDispatch();

  return (
    <div className="h-7 flex items-center justify-between bg-tree-hard border-t-2 border-black text-gray-300 px-5 pb-0.5 flex-shrink-0 z-50">
      <div className="flex items-center">
        <img
          alt="Web-assembly-logo"
          src="/icons/web-assembly.svg"
          className="h-4 w-4 mr-4"
        />
        <a
          href="https://github.com/philippetedajo/Codetree"
          target="_blank"
          rel="noreferrer"
          className="mr-3 hover:text-green-500 text-sm"
        >
          Check this ✨
        </a>
        {isCompiling ? (
          <div className="flex items-center">
            <div className="mr-3"> Compiling code ...</div>
            <div className="loader-spinner ease-linear rounded-full border-8 border-t-8 border-gray-300 h-4 w-4" />
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="flex justify-center items-center">
        <div
          className="cursor-pointer flex items-center mr-2 hover:text-white"
          onClick={() => dispatch(toggle_logs_tab())}
        >
          <FiTerminal size={18} className="mr-1 " /> Console
        </div>

        {logs.length > 0 ? (
          <div className="h-5 w-5 flex justify-center items-center">
            <div className="absolute p-1.5 bg-green-400 rounded-full animate-ping" />
            <div className="absolute p-1 bg-green-400  border-white rounded-full" />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export const EditorFooter = React.memo(Footer);
