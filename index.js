const express = require('express')
const app = express()

require('dotenv').config()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("ruta inicial")
})
app.get("/about", (req, res) => {
    res.send("ruta about")
})
app.get("/contact", (req, res) => {
    res.send("ruta contact")
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
})