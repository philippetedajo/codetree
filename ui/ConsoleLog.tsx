import React from "react";

import { useAppSelector, useAppDispatch } from "../store/hook";
import {
  editor_state,
  clear_logs,
  toggle_logs_tab,
} from "../store/features/editorSlice";
import { TiMinus } from "react-icons/ti";
import dynamic from "next/dynamic";
import { FiTerminal } from "react-icons/fi";
import { defaultStyles } from "../constants/styles";

const Console = dynamic(import("console-feed/lib/Component"), { ssr: false });

interface LogsProps {
  isCompiling: boolean;
  logs: any;
}

const Logs = ({ logs, isCompiling }: LogsProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="bg-tree-soft text-gray-300 relative h-full">
      <div className="flex items-center justify-between bg-tree-hard px-3 h-9">
        <div>
          {isCompiling && (
            <div className="flex items-center">
              <div className="mr-3"> Compiling ...</div>
              <div className="loader-spinner ease-linear rounded-full border-8 border-t-8 border-gray-300 h-4 w-4" />
            </div>
          )}
        </div>

        <div className="flex items-center">
          <button
            onClick={() => dispatch(clear_logs())}
            className="editor-button h-5 mr-3"
          >
            Clear
          </button>

          <div
            onClick={() => dispatch(toggle_logs_tab())}
            className="flex items-center cursor-pointer"
          >
            <FiTerminal size={18} className="mr-1 " /> Console
          </div>

          <div className="ml-2">
            {logs.length > 0 && (
              <div className="h-5 w-5 flex justify-center items-center">
                <div className="absolute p-1.5 bg-green-400 rounded-full animate-ping" />
                <div className="absolute p-1 bg-green-400  border-white rounded-full" />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="h-80 overflow-auto">
        <Console
          styles={{
            BASE_FONT_FAMILY: '"Rubik", sans-serif;',
            BASE_FONT_SIZE: 14,
            BASE_BACKGROUND_COLOR: defaultStyles.soft,
            LOG_BORDER: defaultStyles.border_high,
          }}
          logs={logs}
          variant="dark"
        />
      </div>
    </div>
  );
};

const ConsoleLog = React.memo(Logs);

export default ConsoleLog;
