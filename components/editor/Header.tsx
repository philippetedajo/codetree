import React, { useState } from "react";
import OptionsModal from "./options/OptionsModal";
import { useAppSelector } from "../../store/hook";
import { editor_state } from "../../store/features/editorSlice";

const Header: React.FC = () => {
  const { isFocusMode } = useAppSelector(editor_state);

  return (
    <header
      style={{ height: isFocusMode ? "0" : "6vh" }}
      className="flex flex-shrink-0 px-5 justify-between items-center border-b border-black bg-tree-soft text-white"
    >
      {/*<div className="logo text-4xl w-9 h-9">C</div>*/}
      {/*<OptionsModal />*/}
    </header>
  );
};

export default Header;
