const { Router } = require ("express");
const userRouter = Router();

const { addUser } = require ("./controllers");

userRouter.post("/users", addUser);

module.exports = userRouter;