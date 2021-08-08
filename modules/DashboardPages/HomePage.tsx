import React from "react";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="ml-60">
      <div className="dashboard-header">Home</div>
      <div className="grid grid-cols-4 gap-8 overflow-auto px-5 pt-24">
        <div>
          <div className="border h-44 rounded">image</div>
          <div className="mt-2.5 leading-4">
            <p className="font-bold">Title</p>
            <p className="text-sm text-gray-500">Description</p>
          </div>
        </div>
        {/*<Image*/}
        {/*  height={100}*/}
        {/*  width={100}*/}
        {/*  */}
        {/*  src="https://cdn.dribbble.com/users/6237882/screenshots/15270492/media/11863e6e28299b753fcff57b37793e98.png"*/}
        {/*  alt=""*/}
        {/*/>*/}
      </div>
    </div>
  );
};

export default HomePage;
