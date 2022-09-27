import React from "react";
import dynamic from "next/dynamic";
import { useAppDispatch } from "../../store/hook";
import { clear_logs } from "../../store/features/editorSlice";

import { defaultStyles } from "../constants/styles";

const Console = dynamic(import("console-feed/lib/Component"), { ssr: false });

interface LogsProps {
  logs: any;
}

const Logs = ({ logs }: LogsProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="bg-tree-soft text-gray-300 relative h-full">
      <div className="flex items-center justify-between bg-tree-hard px-3 h-9">
        <button
          onClick={() => dispatch(clear_logs())}
          className="editor-button h-5 mr-3"
        >
          Clear
        </button>
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
