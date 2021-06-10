import React, { useEffect } from "react";
import axios from "axios";
import { checkSession, withSession } from "../../utils";
import Tree from "../../components/editor/Tree";
import { useAppDispatch } from "../../store/hook";
import { manualBundleStart } from "../../components/editor/utils/manualBundleStart";
import { set_initial_Monaco_Value } from "../../store/features/editorSlice";

const Hash = ({ inSession, tree }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    manualBundleStart(tree.data, dispatch);
    dispatch(
      set_initial_Monaco_Value({
        js: tree.data.languages.js.code.data,
        html: tree.data.languages.html.code.data,
        css: tree.data.languages.css.code.data,
      })
    );
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
