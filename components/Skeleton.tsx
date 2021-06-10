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
        <div className="profile-pic-wrapper rounded-full bg-gray-300 shadow-lg mr-5" />

        <div className="flex flex-col justify-center  w-40">
          <div className="h-3 bg-gray-300 mb-2.5 rounded w-3/4 " />
          <div className="h-3 bg-gray-300 mb-2.5 mt-1 rounded w-full " />
          <div className="h-3 bg-gray-300 mb-2.5 mt-3 rounded w-full " />
          <div className="h-3 bg-gray-300 rounded mt-3 w-full " />
        </div>
      </div>
    </div>
  );
};

export const SkeletonTree = () => {
  return (
    <div className="animate-pulse">
      <div className="border h-72 rounded-md overflow-hidden shadow-md flex flex-col">
        <div className=" w-full h-4/5 bg-gray-300 cursor-pointer" />
        <div className=" w-full h-1/5 flex flex-col px-5 pt-1">
          <div className="h-3 bg-gray-300 mb-2.5 mt-2 rounded w-1/2" />{" "}
          <div className="h-3 bg-gray-300 rounded w-3/4" />
        </div>
      </div>
    </div>
  );
};

export const SettingPictureSkeleton = () => {
  return (
    <div className="animate-pulse rounded-full bg-gray-300 w-40 h-40 shadow-lg" />
  );
};
