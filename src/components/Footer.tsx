import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { editor_state } from "../store/features/editorSlice";
import { toggle_console } from "../store/features/consoleSlice";

const Footer: React.FC = () => {
  const { js } = useAppSelector(editor_state);
  const dispatch = useAppDispatch();

  const handleToggleConsole = () => {
    dispatch(toggle_console());
  };

  return (
    <footer
      style={{ height: "3.5vh" }}
      className="editor-footer font-semibold  flex justify-between item-center px-5 text-white text-sm bg-editor_primary border-t-2 border-editor_border"
    >
      <div>
        <a
          className="mr-2 hover:text-green-500"
          href="https://github.com/philippetedajo/Codetree"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <a
          className="mr-2 hover:text-green-500"
          href="https://twitter.com/PhilippeTedajo"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
      </div>
      <div>
        {js.code.loading ? <div className="mr-3">Transpiling...</div> : ""}
        <div className="mr-1">
          <span className="cursor-pointer" onClick={handleToggleConsole}>
            Console
          </span>
          <div className="absolute right-2.5 p-1 bg-green-400 rounded-full bottom-2.5 animate-ping" />
          <div className="absolute right-2.5 p-1 bg-green-400  border-white rounded-full bottom-2.5" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
