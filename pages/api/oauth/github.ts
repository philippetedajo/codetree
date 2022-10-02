import { withSessionApiRoute } from "../../../utils/withSession";
import { createApolloClient } from "../../../utils/client";
import { githubOauthMutation } from "../../../graphql/definitions/auth.definition";

export default withSessionApiRoute(async (req, res) => {
  const client = createApolloClient();

  try {
    const data = await client.mutate({
      mutation: githubOauthMutation,
      variables: { input: req.body },
    });

    if (!data.data.githubOauth.status) {
      res.json({ isLoggedIn: false, ...data.data.githubOauth });
      return;
    }

    const user = { isLoggedIn: true, ...data.data.githubOauth };
    req.session.user = user;

    await req.session.save();
    res.json(user);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});
