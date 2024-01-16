const { Router } = require ("express");
const userRouter = Router();

const { addUser, getAllUsers, } = require ("./controllers");

userRouter.post("/users", addUser);

userRouter.get("/users", getAllUsers);



module.exports = userRouter;