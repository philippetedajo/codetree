import React from "react";
import { GetServerSideProps } from "next";
import prisma from "../../libs/prisma";
import { ProjectProps } from "../../_types/prismaTypes";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const project = await prisma.project.findUnique({
    where: {
      id: Number(query?.key) || -1,
    },
  });
  return {
    props: {
      project,
    },
  };
};

type Props = {
  project: ProjectProps;
};

const Slug = ({ project }: Props) => {
  console.log(project);
  return (
    <div>
      <p className="text-xl"> {project?.author} </p>
      <p> {project?.title} </p>
      <p> {project?.description} </p>
    </div>
  );
};

export default Slug;
