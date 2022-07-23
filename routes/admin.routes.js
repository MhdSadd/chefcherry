const express = require("express");
const router = express.Router();
const adminController = require("../controller/adminController");
const auth = require("../middleware/auth");

router.get("/", auth, adminController.dashPage);

module.exports = router;
