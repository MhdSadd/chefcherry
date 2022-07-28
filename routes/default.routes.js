require ("dotenv");
const express = require("express")
const router =express.Router();
const defaultController = require('../controller/defaultController')
const Admin = require('../models/admin')
const adminController = require("../controller/adminController")

router.get('/', defaultController.indexPage)
router.get('/portfolio', defaultController.portfolioPage)
router.get('/contact', defaultController.contactPage)
router.get('/table', defaultController.Tables)
router.get('/tbl', adminController.table)

const credential = {
    email: "okpanz700@gmail.com",
    password: "1234Chef"
}



router.get('/login', defaultController.loginPage);

userna = process.env.EMAIL;
userne = process.env.PASSWORD;
console.log(userna, userne  )


module.exports =router