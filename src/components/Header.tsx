import React from "react";

const Header: React.FC = () => {
  return (
    <header
      style={{ height: "7vh" }}
      className="flex tracking-wider font-bold justify-between items-center px-5 bg-tree-hard text-white"
    >
      <div className="pb-2">
        <span className="text-3xl text-green-500">C</span>odetree
      </div>
    </header>
  );
};

export default Header;
