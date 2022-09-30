import React from "react";
import { Playground, Header, SideBar, SidePanel } from "../components";

const Index = () => {
  return (
    <div
      style={{
        backgroundImage: `url(https://res.cloudinary.com/dknn4yirm/image/upload/v1664491334/blurred-1664491325426-4864_aakg6c.jpg)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-full h-screen"
    >
      <Header />

      <div className="text-5xl font-medium flex justify-center mb-10">
        <div>Share It ...Fast</div>
      </div>

      <div style={{ height: "75vh" }} className="flex justify-center px-12">
        <SideBar />

        <div className="w-10/12 glassmorphism rounded-tr-xl rounded-br-xl overflow-hidden">
          <Playground />
        </div>
      </div>
    </div>
  );
};

export default Index;
