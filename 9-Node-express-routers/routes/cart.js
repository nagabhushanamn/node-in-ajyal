
const express = require('express')
const router = express.Router()


router.get("/",(req, res) => {
    //...
    res.json(["c1", "c2", "c3"])
})

module.exports = router;