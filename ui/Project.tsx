import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineEye } from "react-icons/ai";
import { GiCrossedBones } from "react-icons/gi";
import { ProjectProps } from "../_types/uiTypes";

export const Project: React.FC<{ props: ProjectProps; onDelete?: () => void }> =
  ({ props, onDelete }) => {
    return (
      <div>
        <div className="relative">
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
            </a>
          </Link>

          {onDelete ? (
            <div className="absolute top-2 right-2 bg-tree-hard rounded-full p-1 opacity-95">
              <GiCrossedBones
                className="cursor-pointer hover:animate-spin"
                size={15}
                onClick={onDelete}
              />
            </div>
          ) : (
            ""
          )}
        </div>
        {/* =========*/}
        <div className="mt-2.5">
          <div className="flex items-center justify-between">
            <p className="text-lg font-bold truncate w-9/12">{props.title}</p>

            <div className="flex items-center">
              <AiOutlineEye className="cursor-pointer mr-1" size={16} />
              <p className="text-sm ">235</p>
            </div>
          </div>
          <p className="text-gray-500 text-sm">
            By {props.author?.name} - May 24, 2021.
          </p>
        </div>
      </div>
    );
  };
