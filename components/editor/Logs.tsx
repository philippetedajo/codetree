import React from "react";
import Image from "next/image";
import { Console } from "console-feed";

const Logs = ({ logs }) => {
  return (
    <div>
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
  );
};

export default Logs;
