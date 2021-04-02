import React from "react";
import { useAppSelector } from "../store/hook";
import { editor_state } from "../store/features/editorSlice";

const Footer = () => {
  const { js } = useAppSelector(editor_state);
  return (
    <footer
      style={{ height: "3.5vh" }}
      className="editor-footer flex justify-end item-center px-5 text-white text-sm bg-editorprimary border-t-2 border-editorborder"
    >
      {js.code.loading && (
        <div className="relative mr-5">
          <div className="mr-4 font-semibold"> ...Transpiling</div>
          <div className="absolute right-0 p-1 bg-green-400 rounded-full bottom-2.5 animate-ping" />
          <div className="absolute right-0 p-1 bg-green-400  border-white rounded-full bottom-2.5" />
        </div>
      )}
      <div className="font-semibold">Console</div>
    </footer>
  );
};

export default Footer;
