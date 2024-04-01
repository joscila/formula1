const { app, PORT, http } = require("./config/server");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express")
const path = require("path");
const conn = require("./config/db");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(cors())

app.use("/api",require("./routes/api"));

app.use("/mediafiles", express.static(path.join(__dirname, "mediafiles")))

app.use("/", express.static(path.join(__dirname, "ui")))

app.get("/", (req, res) => {
    res.json("Servidor Rodando Perfeitamente");
})

http.listen(PORT, () => {
    conn.sync()
    console.log(`Server running at: http://localhost:${PORT}/"`);
})
