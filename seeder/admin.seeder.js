require("dotenv").config({ path: "../.env", debug: true });
const Administrator = require("../data/admin");
const bcrypt = require("bcryptjs");
const connectDB = require("../config/db");
const { Admin } = require("../models/admin");

connectDB();

const admin = new Admin({
  fullName: "Admin chef",
  email: "admin@gmail.com",
  password: "chef1234cherry",
  isAdmin: true,
});

//===================== Hash the password and seeding to database======================
bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(admin.password, salt, (err, hash) => {
    if (err) throw err;
    admin.password = hash;
    admin
      .save()
      .then((user) => {
        console.log(`user saved successfully ${user}`);
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
