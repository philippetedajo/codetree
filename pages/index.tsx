import React from "react";
import { GetStaticProps } from "next";
import prisma from "../libs/prisma";
import { ProjectProps } from "../_types/prismaTypes";
import { Project } from "../ui";

export const getStaticProps: GetStaticProps = async () => {
  const projects = await prisma.project.findMany({
    where: {
      private: false,
    },
  });

  return {
    props: { projects },
  };
};

type Props = {
  projects: ProjectProps[];
};

const Home = (props: Props) => {
  const projectList = props.projects.map((project) => (
    <div key={project.id}>
      <Project props={project} />
    </div>
  ));

  return (
    <div className="px-16 pt-20">
      <h1 className="text-2xl">All public projects</h1>
      <div className="grid grid-cols-4 gap-8 overflow-auto pt-14">
        {projectList}
      </div>
    </div>
  );
};

export default Home;
