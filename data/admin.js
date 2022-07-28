const bcrypt = require("bcryptjs");
const Administrator = [
  {
    name: "Okpanachi Emmanuel",
    phone: 08164482158,
    password: bcrypt.hashSync("0987", 10),
    isVerified: true,
  },
];
module.exports = Administrator;

// const adminData = [
//   {
//     username: "Admin",
//     password: "1234Admin",
//   },
// ];

// module.exports = adminData;
