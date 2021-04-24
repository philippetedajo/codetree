import React from "react";

const EditorLoader = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <ul className="loader">
        <li className="center bg-green-400" />
        <li className="item item-1 bg-green-400" />
        <li className="item item-2 bg-green-400" />
        <li className="item item-3 bg-green-400" />
        <li className="item item-4 bg-green-400" />
        <li className="item item-5 bg-green-400" />
        <li className="item item-6 bg-green-400" />
        <li className="item item-7 bg-green-400" />
        <li className="item item-8 bg-green-400" />
      </ul>
      <h2 className="text-white mt-7 mr-10">Building stuff ✨ for you.</h2>
    </div>
  );
};

export default EditorLoader;
