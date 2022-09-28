import React from "react";

import Playground from "../components/Playground";
import SidePanel from "../components/ui/SidePanel";
import Header from "../components/ui/Header";

const Index = () => {
  return (
    <div className="w-full">
      <Header />

      <div className="text-5xl font-medium border flex justify-center mb-10">
        <div>Share It ...Fast</div>
      </div>

      <div
        style={{ height: "75vh" }}
        className="flex justify-around border border-red-500 px-12"
      >
        <div className="w-10/12">
          <Playground />
        </div>

        <SidePanel />
      </div>
    </div>
  );
};

export default Index;
