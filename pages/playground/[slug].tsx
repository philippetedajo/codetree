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
  projects: ProjectProps;
};

const Slug = (props: Props) => {
  console.log(props.projects);
  return <div>Playground by id</div>;
};

export default Slug;
