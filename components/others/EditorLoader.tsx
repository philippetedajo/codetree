import React from "react";

const EditorLoader = () => {
  return (
    <div className="h-full bg-white flex flex-col items-center justify-center">
      <div className="bg-white  flex flex-col items-center justify-center fade-loader">
        <ul className="loader ml-7">
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
        <h2 className="text-black mt-7">Building stuff ✨ for you.</h2>
      </div>
    </div>
  );
};

export default EditorLoader;
