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
    include: {
      author: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
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
    <div className="px-8 md:px-12 pt-20">
      <h1 className="text-4xl">All public projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 overflow-auto pt-14">
        {projectList}
      </div>
    </div>
  );
};

export default Home;
