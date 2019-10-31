
const express = require('express')
const router = express.Router()


router.get("/",(req, res) => {
    //...
    res.json(["o1", "o2", "o3"])
})
router.post("/",(req, res) => {
    //...
    res.json({message:'New Order placed'})
})

module.exports = router;