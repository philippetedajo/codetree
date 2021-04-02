import React from "react";

const Footer = () => {
  return (
    <footer
      style={{ height: "3.5vh" }}
      className="editor-footer flex justify-end item-center px-5 text-white text-sm bg-editorprimary border-t-2 border-editorborder"
    >
      <div className="font-semibold mr-1">
        Console
        <div className="absolute right-2.5 p-1 bg-green-400 rounded-full bottom-2.5 animate-ping" />
        <div className="absolute right-2.5 p-1 bg-green-400  border-white rounded-full bottom-2.5" />
      </div>
    </footer>
  );
};

export default Footer;
