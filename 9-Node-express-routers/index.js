

const express = require('express')

const itemsRouter=require('./routes/items')
const cartRouter=require('./routes/cart')
const ordersRouter=require('./routes/orders')

const app = express();

// backend e,g Eat-it

/*
/items
/items/{itemId}/reviews
/cart
/orders
/login
*/

// -------------------------------------------------------
app.use("/items",itemsRouter)
app.use("/cart",cartRouter)
app.use("/orders",ordersRouter)
// -------------------------------------------------------

// app.get("/items", (req, res) => {
//     //...
//     res.json(["i1", "i2", "i3"])
// })

// app.get("/items/:itemId/reviews", (req, res) => {
//     //...
//     res.json(["r1", "r2", "r3"])
// })

// app.get("/cart", (req, res) => {
//     //...
//     res.json(["c1", "c2", "c3"])
// })

// app.get("/orders", (req, res) => {
//     //...
//     res.json(["o1", "o2", "o3"])
// })
// app.post("/orders", (req, res) => {
//     res.json({ message: 'New order created' })
// })

// -------------------------------------------------------

app.listen(3000, () => {
    console.log("im listening")
})