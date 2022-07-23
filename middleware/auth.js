const adminData = require("../data/admin");

const auth = (req, res, next) => {
  console.log("Route's Working");
  if (req.isAuthenticated()) {
    console.log("its okay");
    res.send(req.flash({ message: `You have be redirected Succefully` }));
    next();
  } else {
    res.redirect("/");
    console.log("login pls");
  }
};

module.exports = auth;
