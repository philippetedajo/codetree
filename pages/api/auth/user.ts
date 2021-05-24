import { withSession } from "../../../utils";
import { fetcher } from "../../../utils";

export default withSession(async (req, res) => {
  const user = req.session.get("user");

  if (user) {
    const url = `${process.env.CODETREE_API}/auth/profile/data`;
    const profile = await fetcher(url, "GET", user.token);

    res.json({
      isLoggedIn: true,
      ...user,
      profile,
    });
  } else {
    res.json({
      isLoggedIn: false,
    });
  }
});
