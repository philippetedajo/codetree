import React from "react";
import { GetServerSideProps } from "next";
import generate from "project-name-generator";
import Router from "next/router";
import { getSession, session } from "next-auth/client";
import { useAxios } from "../../hooks/useAxios";
import prisma from "../../libs/prisma";
import { Project } from "../../ui";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });
  if (!session) {
    res.statusCode = 403;
    console.log("no session");
    return { props: { projects: [] } };
  }

  const projects = await prisma.project.findMany({
    where: {
      author: { email: session?.user?.name },
    },
  });

  return {
    props: { projects },
  };
};

const Index = () => {
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
    });
  };

  console.log(data);

  return (
    <div className="">
      <div className="dashboard-header flex justify-between">
        <div className="mr-2">Home</div>
        {isLoading ? (
          "Loading..."
        ) : (
          <div className="cursor-pointer" onClick={onCreateProject}>
            Create project
          </div>
        )}
      </div>
      <div className="grid grid-cols-4 gap-8 overflow-auto px-7 pt-24">
        {/**/}
      </div>
    </div>
  );
};

export default Index;
