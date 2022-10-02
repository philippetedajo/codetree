import { withSessionApiRoute } from "../../../utils/withSession";
import { createApolloClient } from "../../../utils/client";
import { googleOauthMutation } from "../../../graphql/definitions/auth.definition";

export default withSessionApiRoute(async (req, res) => {
  const client = createApolloClient();

  try {
    const data = await client.mutate({
      mutation: googleOauthMutation,
      variables: { input: req.body },
    });

    if (!data.data.googleOauth.status) {
      res.json({ isLoggedIn: false, ...data.data.googleOauth });
      return;
    }

    const user = { isLoggedIn: true, ...data.data.googleOauth };
    req.session.user = user;

    await req.session.save();
    res.json(user);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});
