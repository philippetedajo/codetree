import React from "react";

export const SkeletonMinProfile = () => {
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

export const SkeletonProfile = () => {
  return (
    <div className="animate-pulse">
      <div className="flex">
        <div
          style={{ height: 120, width: 120 }}
          className="rounded-full bg-gray-300 shadow-lg mr-5"
        />

        <div className="flex flex-col justify-center border w-40">
          <div className="h-3 bg-gray-300 mb-2.5 rounded w-3/4 " />
          <div className="h-3 bg-gray-300 mb-2.5 rounded w-full " />
          <div className="h-3 bg-gray-300 rounded w-full " />
        </div>
      </div>
      <div className="h-3 bg-gray-300 mt-4 rounded w-64 " />
      <div className="h-3 bg-gray-300 mt-2.5 rounded w-52 " />
    </div>
  );
};

export const SettingPictureSkeleton = () => {
  return (
    <div className="animate-pulse rounded-full bg-gray-300 w-40 h-40 shadow-lg" />
  );
};
