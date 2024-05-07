import express from "express";

const rootRouter = express.Router();

const home = (req, res) => {
    return res.send("home");
};

rootRouter.get("/", home);

export default rootRouter;