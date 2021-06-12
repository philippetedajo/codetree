import React from "react";
import { withSession } from "../utils";
import FadeBackground from "../components/site/slider";

const Index = () => {
  return (
    <div style={{ paddingTop: "8vh" }}>
      <FadeBackground />
    </div>
  );
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
