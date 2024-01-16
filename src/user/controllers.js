const User = require("./model");
const { get } = require("./routes");

const addUser = async (req, res) => {
    try {
        const users = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

    res.status(201).json({message: "user created", users: users})
    } catch (error) {
        res.status(500).json({ message: error.message, error: error });

    }
};


module.exports = {
    addUser: addUser,
};