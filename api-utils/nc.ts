import nextConnect from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";

export default nextConnect<NextApiRequest, NextApiResponse>({
  onError(error, req, res) {
    res.statusCode = 403;
    res.end({ error: error.message });
  },
  onNoMatch(req, res) {
    res.statusCode = 405;
    res.end({ error: `Method ${req.method} is not allowed on this route` });
  },
});
