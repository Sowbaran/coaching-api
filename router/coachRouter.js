const express = require("express")
const    router = express.Router()
const {login,signin} = require("../controller/coachController")

router.route('/login').post(login)
router.route('/signin').post(signin)


module.exports = router;
