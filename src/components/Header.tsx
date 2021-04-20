import React from "react";
import { useAppDispatch } from "../store/hook";
import { update_template } from "../store/features/editorSlice";
import { emptyTemplate, reactTemplate } from "./templates";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  const changeTemplate = () => {
    dispatch(update_template(reactTemplate));
  };

  return (
    <header
      style={{ height: "7vh" }}
      className="flex tracking-wider font-bold justify-between items-center px-5 bg-tree-hard text-white"
    >
      <div className="pb-2">
        <span className="text-3xl text-green-500">C</span>odetree
      </div>
      <button onClick={changeTemplate} className="border-2 border-red-500">
        test
      </button>
    </header>
  );
};

export default Header;
