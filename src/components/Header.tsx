import React from "react";

const Header: React.FC = () => {
  return (
    <header
      style={{ height: "6.5vh" }}
      className="flex justify-between items-center editor-header bg-editorprimary text-white border-b-2 border-editorborder px-9"
    >
      CodeTree
    </header>
  );
};

export default Header;
