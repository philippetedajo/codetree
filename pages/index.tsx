import React, { useEffect, useState } from "react";
import { ProjectProps } from "../_types/uiTypes";
import { Project } from "../ui";
import axios from "axios";
import { CommonPageLayout } from "../ui/layouts";
import { useAxios } from "../hooks/useAxios";

const Home = () => {
  const { getData, data } = useAxios();
  const [projects, setProjects] = useState<any>();

  //  =========================================================
  //  Get all projects   ======================================
  //  =========================================================
  useEffect(() => {
    const onGetAllProject = async () => {
      const result = await axios.get("/api/project/getAll");
      setProjects(result.data);
    };
    onGetAllProject().catch((err) => console.log(err));
  }, []);

  //  =========================================================
  //  Toggle like on a project  ===============================
  //  =========================================================
  const onToggleLikeProject = async (id: number) => {
    await getData({
      url: "/api/like/toggleLike",
      method: "PUT",
      input: {
        projectId: id,
      },
    });
  };

  console.log(data);

  //  Tsx ========================================================================================================

  const projectList = projects?.map((project: ProjectProps) => (
    <div key={project.id}>
      <Project
        props={project}
        onToggleLike={() => onToggleLikeProject(project.id)}
      />
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
