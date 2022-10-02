import React from "react";
import { RiAddFill, RiSettings3Fill } from "react-icons/ri";

const Header = () => {
  return (
    <div style={{ height: "3rem" }} className="flex justify-end px-12">
      <div className="flex gap-4 items-center ">
        <RiAddFill size={24} className="cursor-pointer text-gray-400" />
        <RiSettings3Fill size={20} className="cursor-pointer text-gray-400" />
      </div>
    </div>
  );
};

export default Header;
