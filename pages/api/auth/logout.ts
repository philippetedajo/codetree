import { withSession } from "../../../utils";
import axios from "axios";

export default withSession(async (req, res) => {
  const token = req.session.get("user").token;
  const url = `${process.env.CODETREE_API}/auth/logout`;

  try {
    await axios.post(url, { token });
    req.session.destroy();
    res.json({ isLoggedIn: false });
  } catch (error) {
    res.status(error.response.status);
    res.json(error.response.data.data);
  }
});
