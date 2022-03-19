const express = require("express");
const app = express();

const PORT = 3000
const HOST = '0.0.0.0';

// app.listen(3000, function () {
app.listen(PORT, HOST, function () {
    console.log("listening on 3000");
    console.log(`Running on http://${HOST}:${PORT}`)
});

app.get("/", (req, res) => {
    res.send("Users Shown");
});

app.get("/delete", (req, res) => {
    res.send("Delete User");
});

app.get("/update", (req, res) => {
    res.send("Update User");
});

app.get("/insert", (req, res) => {
    res.send("Insert User");
});