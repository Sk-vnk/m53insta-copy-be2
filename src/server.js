require("dotenv").config()
const express = require("express");

const port = process.env.PORT || 5002;

const app = express();

app.get("/health", (req, res) => {
    res.status(200).json({ message: "API is health" });
});

app.listen(port, () => {
    console.log("Server is listening");
});