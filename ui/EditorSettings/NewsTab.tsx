import React from "react";
import Image from "next/image";

export const News = () => {
  const NewsLine = ({ text }: any) => {
    return (
      <li className="flex">
        <Image alt="plus" src="/icons/plus.svg" width={20} height={20} />
        <div className="ml-5">{text}</div>
      </li>
    );
  };

  return (
    <div>
      <h1 className="text-2xl pb-3 border-b border-tree-border">News</h1>
      <div className="pt-6">
        <h1 className="font-medium text-base">Features</h1>
        <p className="text-gray-400 mb-4">Friday, 7 May 2021</p>
        <ul>
          <NewsLine text="Adding P5jS and ReactJs templates" />
        </ul>
      </div>
    </div>
  );
};
