import React from "react";
import Image from "next/image";

interface ProjectInterface {
  title: string;
  description: string;
  imgSrc: string;
}

export const Project = ({ title, description, imgSrc }: ProjectInterface) => {
  return (
    <div className="cursor-pointer">
      <div className="rounded overflow-hidden unset-img h-44 mb-5 transform hover:scale-110 transition-all duration-500">
        <Image
          className="custom-project-img"
          layout="fill"
          objectFit={"cover"}
          objectPosition={"center"}
          alt="project"
          src={imgSrc}
        />
      </div>
      <div className="mt-2.5 leading-4">
        <p className="font-bold">{title}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};
