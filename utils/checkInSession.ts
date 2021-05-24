export const checkSession = (req, res) => {
  const user = req.session.get("user");
  //if user has no session redirect to login
  if (user === undefined) {
    res.setHeader("location", "/auth/login");
    res.statusCode = 302;
    res.end();
    return { props: {} };
  }
};
