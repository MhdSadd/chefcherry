const Admin = require('../models/admin')


const dashPage =async (req, res) => {
  let Title = "Dashboard | Admin";
  res.render("admin/dashboard", { Title });
  };

  const table = async (req, res) => {
    let Title = "Tables | Admin";
    res.render("admin/tables")
  }

  const User = async (req,res) =>{
    let TItle ="Profile | Admin"
    res.render("admin/user")
  }

  const Gallery = async (req, res) => {
    let Title ="Gallery | Admin"
    res.render("admin/gallery")
  };
  const Typography = async (req, res) => {
    let Title ="Typograohy | Admin"
    res.render("admin/typography.ejs")
  };
module.exports = {
  dashPage,
  table,
  User,
  Gallery,
  Typography
};
