import React from "react";
import axios from "axios";
import { checkSession, withSession } from "../../utils";
import Tree from "../../components/editor/Tree";

const Hash = ({ inSession, tree }) => {
  return <Tree inSession={inSession} tree={tree} />;
};

export default Hash;

export const getServerSideProps = withSession(async (context) => {
  checkSession(context.req, context.res);
  const user = context.req.session.get("user");

  if (user) {
    let hash = context.query.hash;
    const url = `${process.env.NEXT_PUBLIC_CODETREE_API}/tree/${hash}`;
    const data = await axios(url);

    return {
      props: {
        inSession: true,
        tree: data.data,
      },
    };
  }

  return {
    props: {
      inSession: false,
    },
  };
});
