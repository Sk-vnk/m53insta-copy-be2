require("dotenv").config()

const express = require("express");

const cors = require("cors");

const port = process.env.PORT || 5002;

const User = require("./user/model");

const userRouter = require("./user/routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(userRouter);

const syncTables = async () => {
    await User.sync();
};

app.get("/health", (req, res) => {
    res.status(200).json({ message: "API is health"});
});


app.listen(port, () => {
    syncTables();
    console.log("Server is listening");
});