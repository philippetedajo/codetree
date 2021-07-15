import React from "react";
import { Console } from "console-feed";
import { useAppSelector, useAppDispatch } from "../store/hook";
import {
  editor_state,
  clear_logs,
  toggle_logs_tab,
} from "../store/features/editorSlice";
import { TiMinus } from "react-icons/ti";

export const ConsoleLog = () => {
  const dispatch = useAppDispatch();
  const { logs } = useAppSelector(editor_state);

  return (
    <div className="bg-tree-soft text-gray-300 relative h-full">
      <div className="flex items-center justify-end bg-tree-hard px-3 h-8">
        <button
          onClick={() => dispatch(clear_logs())}
          className="editor-button h-5 mr-3"
        >
          Clear
        </button>

        <TiMinus
          className="cursor-pointer"
          size={20}
          onClick={() => dispatch(toggle_logs_tab())}
        />
      </div>

      <div className="h-80 overflow-auto">
        <Console
          styles={{
            BASE_FONT_FAMILY: '"Rubik", sans-serif;',
            BASE_FONT_SIZE: 14,
            BASE_BACKGROUND_COLOR: "#1B252D",
            LOG_BORDER: "#303b47",
          }}
          logs={logs}
          variant="dark"
        />
      </div>
    </div>
  );
};
