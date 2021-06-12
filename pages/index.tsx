import React from "react";
import { withSession } from "../utils";

const Index = () => {
  return <div></div>;
};

export default Index;

export const getServerSideProps = withSession(async ({ req, res }) => {
  const user = req.session.get("user");

  if (user) {
    return {
      props: {
        inSession: true,
      },
    };
  }

  return {
    props: {
      inSession: false,
    },
  };
});
