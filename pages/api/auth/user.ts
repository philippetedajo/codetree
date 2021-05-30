import { withSession } from "../../../utils";
import axios from "axios";

export default withSession(async (req, res) => {
  const user = req.session.get("user");
  const url = `${process.env.CODETREE_API}/auth/profile/data`;

  if (user) {
    await axios
      .get(url, {
        headers: {
          Authorization: user.token,
        },
      })
      .then((data) => {
        res.json({
          isLoggedIn: true,
          ...user,
          profile: data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    res.json({
      isLoggedIn: false,
    });
  }
});
