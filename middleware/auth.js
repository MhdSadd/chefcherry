const adminData = require("../data/admin");

const auth = (req, res, next) => {
  console.log("Route's Working");
  // if(!req.cookie.token) 
  //   return res.send("You're not authorized");
  
  if(req.user.isAdmin) {
    return next();
  } else {
    return res.status(404).redirect("/");

  }

};

const addAuthToken = (req, res, next) => {
  const token = req.cookies.token;
  if(!token)
  return res.redirect("/login");
  
  req.headers.authorization = token; 
  return next();
}

module.exports = {auth, addAuthToken};
