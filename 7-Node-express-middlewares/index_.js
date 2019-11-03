const express = require('express')

const app = express();

app.get("/req1", (req, res) => {
    res.send("response for /req1");
})


app.use((req, res, next) => {
    console.log("Validation..")
    next();
})
app.use("/req2",(req, res, next) => {
    console.log("Auth..")
    next();
})

app.get("/req2", (req, res) => {
    // console.log("Validation..")
    // console.log("Auth..")
    res.send("response for /req2");
})
app.post("/req3", (req, res) => {
    // console.log("Validation..")
    // console.log("Auth..")
    res.send("response for /req3");
})

app.post("/req4", (req, res, next) => {
    // read request body
    next();
}, (req, res) => {
    // save request-body into database
})

app.listen(3000, () => {
    console.log("im(server) listening");
})