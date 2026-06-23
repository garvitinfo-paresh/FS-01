const express = require("express");

const app = express();

const PORT = 5500;
app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
})

// localhost:5500  - defualt
app.get("/", (req, res) => {
    res.status(201).set('X-Custom-Header', 'Value').json({ "msg": "Default" });
    res.end();
})

// localhost:5500/home  
app.get("/home", (req, res) => {
    res.status(201).set('X-Custom-Header', 'Value').json({ "msg": "Welcome Home" });
    res.end();
})

// localhost:5500/home/user/profile
app.get("/home/user/profile", (req, res) => {
    res.status(201).set('X-Custom-Header', 'Value').json({ "msg": "this is user profile " });
    res.end();
})

app.post("/home/user/profile", (req, res) => {
    res.status(201).set('X-Custom-Header', 'Value').json({ "msg": "this is user profile POST METHOD" });
    res.end();
})

app.delete("/home/user", (req, res) => {
    res.status(201).set('X-Custom-Header', 'Value').json({ "msg": "user deleted DELETE METHOD" });
    res.end();
})

app.delete("/", (req, res) => {
    res.status(201).set('X-Custom-Header', 'Value').json({ "msg": "default DELETE METHOD" });
    res.end();
})
