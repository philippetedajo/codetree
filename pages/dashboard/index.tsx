import React from "react";
import { GetServerSideProps } from "next";
import { Project } from "../../ui";
import { getSession, session } from "next-auth/client";
import prisma from "../../libs/prisma";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });
  if (!session) {
    res.statusCode = 403;
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

const DashboardHome = () => {
  const onCreateProject = () => {};

  return (
    <div className="">
      <div className="dashboard-header flex justify-between">
        <div className="mr-2">Home</div>
        <div onClick={onCreateProject}>Create project</div>
      </div>
      <div className="grid grid-cols-4 gap-8 overflow-auto px-7 pt-24">
        {/**/}
      </div>
    </div>
  );
};

export default DashboardHome;
