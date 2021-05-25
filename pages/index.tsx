import React from "react";
import { withSession } from "../utils";

const Index = () => {
  return <div>All trees</div>;
};

export default Index;

export const getServerSideProps = withSession(async ({ req, res }) => {
  const user = req.session.get("user");
  //if user has no session redirect to welcome page
  if (user === undefined) {
    res.setHeader("location", "/welcome");
    res.statusCode = 302;
    res.end();
    return { props: {} };
  }

  return {
    props: {},
  };
});
