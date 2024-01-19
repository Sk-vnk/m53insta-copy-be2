const Favs =require("./model");
const { get } = require("./routes");

const addFav = async (req, res) => {
    try {
        const fav = await Favs.create({
            id: req.body.id,
            url: req.body.url,
        });

    res.status(201).json({ message: "added to favourites", fav: fav})
    } catch (error) {
        res.status(500).json({ message: error.message, error: error});
    }
};

const getAllFavs = async (req, res) => {
    try {
        const favs = await Favs.findAll();
        res.status(201).json({ message: "fav pics found", favs: favs})
    } catch (error) {
        res.status(500).json({ message: error.message, error: error});
    }
};

module.exports = {
    addFav: addFav,
    getAllFavs: getAllFavs,
};