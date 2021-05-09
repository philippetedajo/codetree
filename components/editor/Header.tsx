import React, { useState } from "react";
import OptionsModal from "./options/OptionsModal";

const Header: React.FC = () => {
  const [height, setHeight] = useState("6vh");
  return (
    <header
      style={{ height: "6vh" }}
      className="flex flex-shrink-0 px-5 justify-between items-center border-b border-black bg-tree-soft text-white"
    >
      {/*<div className="logo text-4xl w-9 h-9">C</div>*/}
      {/*<OptionsModal />*/}
    </header>
  );
};

export default Header;
