const express = require("express");
const router = express.Router();
const passport = require("passport");
const adminController = require("../controller/adminController");
const {addAuthToken, auth} = require("../middleware/auth");
const {login} = require("../controller/authController");  

router.get("/", addAuthToken, passport.authenticate("jwt", {session: false}), auth, adminController.dashPage);
router.post("/", login);
router.get('/table',addAuthToken, passport.authenticate("jwt", {session :false}), auth, adminController.table )
router.get('/profile',addAuthToken, passport.authenticate("jwt", {session :false}), auth, adminController.User )
router.get('/typo',addAuthToken, passport.authenticate("jwt", {session :false}), auth, adminController.Typography )
router.get('/gallery',addAuthToken, passport.authenticate("jwt", {session :false}), auth, adminController.Gallery )

module.exports = router;
