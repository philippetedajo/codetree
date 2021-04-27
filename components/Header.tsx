import React from "react";
import TemplateDropdown from "./others/TemplateDropdown";

const Header: React.FC = () => {
  return (
    <header
      className="flex px-5 justify-between border-b border-black bg-tree-soft text-white"
      style={{ height: "7vh" }}
    >
      <div className="pb-2 font-bold">
        <span className="text-3xl text-green-500">C</span>odetree
      </div>
      <TemplateDropdown />
    </header>
  );
};

export default Header;
