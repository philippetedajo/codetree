import React from "react";
import { SettingsLayout } from "../../components/share";
import { checkSession, fetcher, withSession } from "../../utils";

const Password = ({ profile }) => {
  return <SettingsLayout>Password</SettingsLayout>;
};

export default Password;

export const getServerSideProps = withSession(async ({ req, res }) => {
  checkSession(req, res);
  const token = req.session.get("user").token;
  const url = `${process.env.CODETREE_API}/auth/profile/data`;
  const profile = await fetcher(url, "GET", token);

  return {
    props: {
      profile: profile.data.data,
    },
  };
});
