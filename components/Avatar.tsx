import Image from "next/image";
import React from "react";

interface AvatarProps {
  image?: string;
  username?: string;
  size?: number;
  gradient?: boolean;
  className?: string;
  placeholderType?: "blur" | "empty" | undefined;
}

export const Avatar = ({
  image,
  username,
  size = 45,
  gradient,
  className,
  placeholderType = "blur",
}: AvatarProps) => {
  if (image)
    return (
      <div
        className={` ${
          gradient && `bg-gradient-to-t from-violet-400 to-violet-100 p-0.5`
        } relative flex justify-center items-center rounded-full shadow-xl overflow-hidden ${className}`}
      >
        <div className="flex">
          <Image
            src={image}
            alt="avatar"
            className="cursor-pointer rounded-full"
            objectFit="cover"
            width={size}
            height={size}
            placeholder={placeholderType}
            quality={100}
            blurDataURL={placeholderType === "blur" ? image : undefined}
          />
        </div>
      </div>
    );

  return (
    <div className="flex justify-center items-center relative">
      <div
        style={{
          width: size,
          height: size,
        }}
        className={`flex items-center justify-center bg-zinc-50 max-w-xs rounded-full mb-1 cursor-pointer border ${className}`}
      >
        {username?.charAt(0).toUpperCase()}
      </div>
    </div>
  );
};
