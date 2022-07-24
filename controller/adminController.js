const dashPage = (req, res) => {
  let Title = "Dashboard | Admin";
  res.render("/", { Title });
};
module.exports = {
  dashPage,
};
