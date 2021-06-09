import React, { useEffect } from "react";
import axios from "axios";
import { checkSession, withSession } from "../../utils";
import Tree from "../../components/editor/Tree";
import { useAppDispatch } from "../../store/hook";
import { set_fetch_data } from "../../store/features/editorSlice";
import { manualBundleStart } from "../../components/editor/utils/manualBundleStart";

const Hash = ({ inSession, tree }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(set_fetch_data(tree.data));
    manualBundleStart(tree.data, dispatch);
  }, []);

  return <Tree inSession={inSession} />;
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
