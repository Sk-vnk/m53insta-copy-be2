const { DataTypes } = require("sequelize");

const sequelize = require("../db/connection")

const Favs = sequelize.define("Favs", {
    id: {
        type: DataTypes.STRING,
        Unique: true,
        allowNull: false,
        primaryKey: true
    },

    url: {
        type: DataTypes.STRING,
    },
});

module.exports = Favs;