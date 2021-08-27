import nextConnect from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";

export default nextConnect<NextApiRequest, NextApiResponse>({
  onError(error, req, res) {
    res.status(500).json({ error: error.message });
  },
  onNoMatch(req, res) {
    res
      .status(405)
      .json({ error: `Method ${req.method} is not allowed on this route` });
  },
});
