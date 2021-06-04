import React from "react";

export const ErrorScreen = ({ err }) => {
  return <div className="h-full text-red-600 p-6">{err}</div>;
};
