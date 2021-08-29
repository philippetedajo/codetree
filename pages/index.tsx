import React from "react";

import { CommonPageLayout } from "../ui/layouts";

const Home = () => {
  return (
    <CommonPageLayout>
      <div className="">
        <h1 className="text-4xl">Wall of fame</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 overflow-auto px-5 py-14">
          list of project
        </div>
      </div>
    </CommonPageLayout>
  );
};

export default Home;
