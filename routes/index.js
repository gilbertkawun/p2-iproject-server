const express = require("express")
const router = express.Router()
const Controller = require("../controllers/controller")

router.get("/datas", Controller.fetchData)


module.exports = router