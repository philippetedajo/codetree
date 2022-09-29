import React from "react";

import { Playground, SidePanel, Header, SideBar } from "../components";

const Index = () => {
  return (
    <div className="w-full">
      <Header />

      <div className="text-5xl font-medium border flex justify-center mb-10">
        <div>Share It ...Fast</div>
      </div>

      <div style={{ height: "75vh" }} className="flex justify-center px-12">
        <SideBar />

        <div className="w-10/12">
          <Playground />
        </div>

        <SidePanel />
      </div>
    </div>
  );
};

export default Index;
