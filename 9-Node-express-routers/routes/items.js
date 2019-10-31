
const express = require('express')
const router = express.Router()


// router.get("/",(req, res) => {
//     //...
//     res.json(["i1", "i2", "i3"])
// })
// router.get("/:itemId/reviews", (req, res) => {
//     //...
//     res.json(["r1", "r2", "r3"])
// })

// or

// statement chaining

router
    .get("/", (req, res) => {
        //...
        res.json(["i1", "i2", "i3"])
    })
    .get("/:itemId/reviews", (req, res) => {
        //...
        res.json(["r1", "r2", "r3"])
    })

module.exports = router;