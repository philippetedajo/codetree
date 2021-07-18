import React from "react";
import Image from "next/image";

export const News = () => {
  const NewsLine = ({ text }: any) => {
    return (
      <li className="flex mt-1">
        <Image alt="plus" src="/icons/plus.svg" width={20} height={20} />
        <div className="ml-5">{text}</div>
      </li>
    );
  };

  return (
    <>
      <h1 className="text-2xl pb-3 border-b border-tree-border">News</h1>
      <div className="pt-6 overflow-auto h-full">
        <h1 className="font-medium text-base">Features</h1>
        <p className="text-gray-400 my-4">Friday, 7 May 2021</p>
        <ul>
          <NewsLine text="Add P5jS  templates" />
          <NewsLine text="Add ReactJs templates" />
        </ul>

        <p className="text-gray-400 my-3">Friday, 18 July 2021</p>
        <ul>
          <NewsLine text="Add Gsap Template" />
          <NewsLine text="Add Typescript Language Support" />
        </ul>
      </div>
    </>
  );
};
