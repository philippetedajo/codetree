import { withSession } from "../../../utils";
import axios from "axios";

export default withSession(async (req, res) => {
  const user = req.session.get("user");

  if (user) {
    const url = `${process.env.CODETREE_API}/auth/profile/data`;

    const data = await axios.get(url, {
      headers: {
        Authorization: user.token,
      },
    });

    res.json({
      isLoggedIn: true,
      ...user,
      profile: data.data,
    });
  } else {
    res.json({
      isLoggedIn: false,
    });
  }
});
