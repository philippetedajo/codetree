import React from "react";
import Image from "next/image";
import { Console } from "console-feed";

const Logs = ({ logs, clearConsole }) => {
  return (
    <div>
      <div className="bg-tree-hard w-full z-50 fixed flex  text-sm shadow px-5 py-1">
        <div onClick={clearConsole}>
          <Image
            src="/icons/clear-outlined.svg"
            alt="clear"
            width={25}
            height={25}
            className="cursor-pointer"
          />
        </div>
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
