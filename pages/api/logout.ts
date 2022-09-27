import { withSessionApiRoute } from "../../utils/withSession";

export default withSessionApiRoute(async (req, res) => {
  try {
    req.session.destroy();
    res.json({ isLoggedIn: false, code: 200, message: "logout successfully" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});
