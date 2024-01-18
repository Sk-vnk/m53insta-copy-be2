const { Router } = require ("express");
const userRouter = Router();

const { addUser, getAllUsers, login, } = require ("./controllers");

userRouter.post("/users", addUser);

userRouter.get("/users", getAllUsers);

userRouter.post("/users/login", login);

module.exports = userRouter;