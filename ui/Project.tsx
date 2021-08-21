import React from "react";
import Image from "next/image";
import { ProjectProps } from "../_types/prismaTypes";
import Link from "next/link";

export const Project: React.FC<{ props: ProjectProps }> = ({ props }) => {
  return (
    <Link
      href={{
        pathname: `/playground/${props.title}`,
        query: { key: props.id },
      }}
    >
      <a className="cursor-pointer">
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
        <div className="mt-2.5">
          <p className="text-xs text-gray-500">May 24, 2021.</p>
          <p className="text-xl font-bold my-2 truncate ">{props.title}</p>
          <p className="text-sm">By {props.author?.name}</p>
        </div>
      </a>
    </Link>
  );
};
