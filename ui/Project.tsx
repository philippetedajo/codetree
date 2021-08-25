import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";
import { GiCrossedBones } from "react-icons/gi";
import { ProjectProps } from "../_types/uiTypes";

export const Project: React.FC<{ props: ProjectProps; onDelete?: () => void }> =
  ({ props, onDelete }) => {
    console.log(props.author);
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
              <AiOutlineHeart className="cursor-pointer mr-1" size={16} />
              <p className="text-sm ">24</p>
            </div>
          </div>
          <div className="flex items-center mt-1">
            <Image
              src={
                props.author?.image ||
                "https://cdn.dribbble.com/users/230875/screenshots/15454050/media/02c37446fc9f090383d14e1b6bcc448c.jpg?compress=1&resize=1600x1200"
              }
              width={25}
              height={25}
              className="rounded-full"
              alt="avatar"
            />
            <p className="text-gray-500 text-sm ml-2">
              By {props.author?.name}
            </p>
          </div>
        </div>
      </div>
    );
  };
