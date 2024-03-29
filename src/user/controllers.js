const Favs = require("../favs/model");
const User = require("./model");
const { get } = require("./routes");

const addUser = async (req, res) => {
    try {
        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

    res.status(201).json({message: "user created", user: user})
    } catch (error) {
        res.status(500).json({ message: error.message, error: error });

    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(201).json({message: "users found", users: users})
    } catch (error) {
        res.status(500).json({ message: error.message, error: error });

    }
};

const login = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                username: req.body.username,
            },
            include: Favs,
        });
        res.status(201).json({message: "logged in", user: user})
    } catch (error) {
        res.status(500).json({ message: error.message, error: error });
    }
};


module.exports = {
    addUser: addUser,
    getAllUsers: getAllUsers,
    login: login,
};