import React from "react";
import generate from "project-name-generator";

const Index = () => {
  const onCreateProject = async () => {
    const generatedName = generate({
      words: 2,
      number: true,
      alliterative: true,
    });
  };
  return (
    <div className="">
      <nav className="dashboard-header flex fixed w-full">
        <div className="mr-2">Home</div>
        <div>Create Project</div>
      </nav>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 overflow-auto px-7 pt-24 pb-16">
        list of projects
      </div>
    </div>
  );
};

export default Index;
