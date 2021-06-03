import React from "react";
import Image from "next/image";
import { Console } from "console-feed";

const Logs = ({ logs, clearConsole }) => {
  return (
    <div>
      <div className="bg-tree-hard border-b-2 border-tree-border w-full z-50 fixed flex items-center text-sm px-5 h-10">
        <Image
          onClick={clearConsole}
          src="/icons/clear-outlined.svg"
          alt="clear"
          width={23}
          height={23}
          className="cursor-pointer"
        />
      </div>
      <div className="pt-10">
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
