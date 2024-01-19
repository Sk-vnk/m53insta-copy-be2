const { Router } = require ("express");
const favRouter = Router();

const { addFav, getAllFavs } = require ("./controllers");

favRouter.post("/favs", addFav);
favRouter.get("/favs", getAllFavs);

module.exports = favRouter;