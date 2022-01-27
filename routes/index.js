const express = require("express")
const router = express.Router()
const Controller = require("../controllers/controller")

router.post("/register", Controller.register)
router.post("/login", Controller.login)

router.get("/datas", Controller.fetchData)


module.exports = router