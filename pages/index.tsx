import React from "react";
import { withSession } from "../utils";
import FadeBackground from "../components/site/slider";
import dynamic from "next/dynamic";
import { CreateTreeModal } from "../components/editor/modals";

const Index = () => {
  const ArtInP5 = dynamic(() => import("../components/site/ArtInP5"), {
    ssr: false,
  });

  return (
    <div style={{ paddingTop: "8vh" }}>
      <FadeBackground />
      <CreateTreeModal />
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
