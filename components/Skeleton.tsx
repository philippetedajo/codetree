import React from "react";

export const SkeletonProfile = () => {
  return (
    <div className="flex animate-pulse items-center">
      <div className="flex flex-col w-36  items-end">
        <div className="h-3 mb-2 bg-gray-300 rounded w-3/4 " />
        <div className="h-3 bg-gray-300 rounded w-full " />
      </div>
      <div className="rounded-full bg-gray-300 h-10 w-10 shadow-lg mx-4" />
    </div>
  );
};
