const express = require("express")
const router =express.Router();
const defaultController = require('../controller/defaultController')

router.get('/', defaultController.indexPage)
router.get('/portfolio', defaultController.portfolioPage)
router.get('/contact', defaultController.contactPage)



module.exports =router