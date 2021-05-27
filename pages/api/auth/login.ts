import { withSession } from "../../../utils";
import axios from "axios";

export default withSession(async (req, res) => {
  const url = `${process.env.CODETREE_API}/auth/login`;

  try {
    const data = await axios.post(url, {
      email: req.body.email,
      password: req.body.min,
    });

    if (data.statusText === "OK") {
      const user = { isLoggedIn: true, ...data.data };
      req.session.set("user", user);
      await req.session.save();
      res.json(user);
    } else {
      res.status();
      res.json(data.data);
    }
  } catch (error) {
    res.status(error.response.status);
    res.json(error.response.data);
  }
});
