import React from "react";
import Image from "next/image";
import { ProjectProps } from "../_types/prismaTypes";

export const Project: React.FC<{ props: ProjectProps }> = ({ props }) => {
  return (
    <div className="cursor-pointer">
      <div className="rounded overflow-hidden unset-img h-44 mb-5 transform hover:scale-110 transition-all duration-500">
        <Image
          className="custom-project-img"
          layout="fill"
          objectFit={"cover"}
          objectPosition="center"
          alt="project"
          src="https://cdn.dribbble.com/users/2624832/screenshots/15457526/media/e155407d8d3f0b64c0be314aa7ac8cc6.png"
        />
      </div>
      <div className="mt-2.5 leading-4">
        <p className="font-bold">{props.title}</p>
        <p className="text-sm text-gray-500">{props.description}</p>
      </div>
    </div>
  );
};
