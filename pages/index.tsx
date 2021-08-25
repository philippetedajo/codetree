import React, { useEffect, useState } from "react";
import { ProjectProps } from "../_types/uiTypes";
import { Project } from "../ui";
import axios from "axios";
import { CommonPageLayout } from "../ui/layouts";

const Home = () => {
  const [projects, setProjects] = useState<any>();

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get("/api/project/getAll");
      setProjects(result.data);
    };
    getData().catch((err) => console.log(err));
  }, []);

  const projectList = projects?.map((project: ProjectProps) => (
    <div key={project.id}>
      <Project props={project} />
    </div>
  ));

  return (
    <CommonPageLayout>
      <div className="">
        <h1 className="text-4xl">Wall of fame</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 overflow-auto px-5 py-14">
          {projects ? projectList : "Loading..."}
        </div>
      </div>
    </CommonPageLayout>
  );
};

export default Home;
