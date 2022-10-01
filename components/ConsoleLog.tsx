import React from "react";
import dynamic from "next/dynamic";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { clear_logs } from "../store/features/editorSlice";

import { theme_state } from "../store/features/themeSlice";

const Console = dynamic(import("console-feed/lib/Component"), { ssr: false });

interface LogsProps {
  logs: any;
}

const Logs = ({ logs }: LogsProps) => {
  const { theme } = useAppSelector(theme_state);
  const dispatch = useAppDispatch();

  return (
    <div className="text-gray-300 relative h-full">
      <div className="flex items-center justify-between px-3 h-9">
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
            BASE_BACKGROUND_COLOR: theme.background,
            LOG_BORDER: theme.border,
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
