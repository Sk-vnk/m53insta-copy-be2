require("dotenv").config()

const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 5002;

const Favs = require("./favs/model")
const User = require("./user/model");

const favRouter = require("./favs/routes");
const userRouter = require("./user/routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(favRouter);
app.use(userRouter);



const syncTables = async () => {
    await User.hasMany(Favs);
    await Favs.belongsToMany(User, {through: "userFavs"});

    await User.sync();
    await Favs.sync({alter:true});
};

app.get("/health", (req, res) => {
    res.status(200).json({ message: "API is health"});
});


app.listen(port, () => {
    syncTables();
    console.log("Server is listening");
});