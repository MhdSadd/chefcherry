const dashPage = (req, res) => {
  let Title = "Dashboard | Admin";
  res.render("/", auth, { Title });
};
module.exports = {
  dashPage,
};
