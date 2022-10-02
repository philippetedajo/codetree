import { withSessionApiRoute } from "../../utils/withSession";

export default withSessionApiRoute(async (req, res) => {
  const userData = await req.session.user;

  const user = {
    ...userData,
    data: {
      ...userData?.data,
      ...(req.body.avatar && { avatar: req.body.avatar }),
      ...(req.body.username && { username: req.body.username }),
    },
  };

  // @ts-ignore
  req.session.user = user;
  await req.session.save();
  res.json(user);
});
