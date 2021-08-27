import React, { useEffect, useState } from "react";
import generate from "project-name-generator";
import Router from "next/router";
import axios from "axios";
import { useAxios } from "../../hooks/useAxios";
import { Project } from "../../ui";
import { ProjectProps } from "../../_types/uiTypes";

const Index = () => {
  const { getData, isLoading } = useAxios();
  const [projects, setProjects] = useState<any>();
  const [projectsHasUpdate, setProjectsHasUpdate] = useState<boolean>(false);

  //  =========================================================
  //  Create a project   ======================================
  //  =========================================================
  const onCreateProject = async () => {
    const generatedName = generate({
      words: 2,
      number: true,
      alliterative: true,
    });

    await getData({
      url: "/api/project/create",
      method: "POST",
      input: {
        title: generatedName.dashed,
        content: "",
      },
      onSuccess: async (response) => {
        await Router.push(`/playground/${response.title}?key=${response.id}`);
      },
    });
  };

  //  =========================================================
  //  Delete a project   ======================================
  //  =========================================================
  const onDeleteProject = async (id: number) => {
    await getData({
      url: `/api/project/${id}`,
      method: "DELETE",
    });
    setProjectsHasUpdate(true);
  };

  //  =========================================================
  //  Get all projects by User   ===============================
  //  =========================================================
  useEffect(() => {
    const onGetAllProjectByUser = async () => {
      const result = await axios.get("/api/project/getAllByUser");
      setProjects(result.data);
    };
    onGetAllProjectByUser().catch((err) => console.log(err));
  }, [projectsHasUpdate]);

  //  Tsx ========================================================================================================

  const projectListByUser = projects?.map((project: ProjectProps) => (
    <div key={project.id}>
      <Project props={project} onDelete={() => onDeleteProject(project.id)} />
    </div>
  ));

  return (
    <div className="">
      <nav className="dashboard-header flex fixed w-full">
        <div className="mr-2">Home</div>
        {isLoading ? (
          "Loading..."
        ) : (
          <div className="cursor-pointer" onClick={onCreateProject}>
            Create project
          </div>
        )}
      </nav>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 overflow-auto px-7 pt-24 pb-16">
        {projectListByUser}
      </div>
    </div>
  );
};

export default Index;
