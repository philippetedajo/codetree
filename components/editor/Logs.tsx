import React from "react";
import { Console } from "console-feed";

const Logs = ({ logs }) => {
  return (
    <div>
      <div className="mt-8">
        <Console
          styles={{
            BASE_FONT_FAMILY: '"Rubik", sans-serif;',
            BASE_FONT_SIZE: 14,
            BASE_BACKGROUND_COLOR: "#171E25",
            LOG_BORDER: "#303b47",
          }}
          logs={logs}
          variant="dark"
        />
      </div>
    </div>
  );
};

export default Logs;
