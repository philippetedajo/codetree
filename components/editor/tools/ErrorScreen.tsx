import React from "react";

export const ErrorScreen = ({ err }) => {
  return (
    <div className="h-full w-full z-10 absolute bg-tree-hard text-red-600 p-6">
      {err}
    </div>
  );
};
