import React from "react";

import Playground from "../components/Playground";
import { EditorHead } from "../editor/ui/layouts";

const Index = () => {
  return (
    <div>
      <div className="border w-full mb-10 h-12">
        Codetree : Share It ...Fast
      </div>

      <div
        style={{ height: "70vh" }}
        className="flex justify-around border border-red-500 w-11/12 mx-auto"
      >
        <div className="w-10/12">
          <Playground />
        </div>

        <div className="border h-full w-2/12">
          <EditorHead />
          <div className="border w-24  h-24" />
        </div>
      </div>
    </div>
  );
};

export default Index;
