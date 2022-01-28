const express = require("express")
const router = express.Router()
const Controller = require("../controllers/controller")
const authentication = require("../middlewares/authentication")

router.post("/register", Controller.register)
router.post("/login", Controller.login)

// router.use(authentication)

router.get("/datas", Controller.fetchData)


module.exports = router