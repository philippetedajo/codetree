import React from "react";
import TemplateDropdown from "./others/TemplateDropdown";

const Header: React.FC = () => {
  return (
    <header
      style={{ height: "7vh" }}
      className="flex border-b border-black tracking-wider font-bold justify-between items-center px-5 bg-tree-soft text-white"
    >
      <div className="pb-2">
        <span className="text-3xl text-green-500">C</span>odetree
      </div>
      <TemplateDropdown />
    </header>
  );
};

export default Header;
