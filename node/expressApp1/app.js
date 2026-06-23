const express = require('express')

const app = express()

app.get("/", (req, res) => {
    res.send("hello")
})

app.listen(5500, () => {
    console.log('server listing on port 5500')
})
