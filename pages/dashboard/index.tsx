import React from "react";
import { GetServerSideProps } from "next";
import generate from "project-name-generator";
import Router from "next/router";
import { getSession } from "next-auth/client";
import { useAxios } from "../../hooks/useAxios";
import prisma from "../../libs/prisma";
import { Project } from "../../ui";
import { ProjectProps } from "../../_types/prismaTypes";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });
  if (!session) {
    res.statusCode = 403;
    return { props: { projects: [] } };
  }

  const projects = await prisma.project.findMany({
    where: {
      author: { email: session?.user?.email },
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

const Index = (props: Props) => {
  const { getData, isLoading, data } = useAxios();

  const onCreateProject = async () => {
    const generatedName = generate({
      words: 2,
      number: false,
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

  const projectListByUser = props.projects.map((project) => (
    <div key={project.id}>
      <Project props={project} />
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8 overflow-auto px-7 pt-24">
        {projectListByUser}
      </div>
    </div>
  );
};

export default Index;
