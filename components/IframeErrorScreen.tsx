import React from "react";

export const IframeErrorScreen = ({ err }: any) => {
  return (
    <div className="px-5 pt-10 text-red-600 tracking-wide absolute h-full w-full z-50 backdrop-filter backdrop-blur">
      {err}
    </div>
  );
};
