import type { NextApiRequest, NextApiResponse } from "next";
import deploymentBadgeHandler from "deployment-badge";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  await deploymentBadgeHandler(req, res, {
    deploymentsUrl:
      "https://api.github.com/repos/philippetedajo/Codetree/deployments",
    namedLogo: "vercel",
    env: "Production",
  });
};

export default handler;
