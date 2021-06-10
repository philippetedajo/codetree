import { withSession } from "../../utils";
import axios from "axios";

export default withSession(async (req, res) => {
  const user = req.session.get("user");
  const url = `${process.env.NEXT_PUBLIC_CODETREE_API}/tree/mine`;

  if (user) {
    await axios
      .get(url, {
        headers: {
          Authorization: user.token,
        },
      })
      .then((data) => {
        res.json({
          trees: data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    res.json({
      trees: false,
    });
  }
});
