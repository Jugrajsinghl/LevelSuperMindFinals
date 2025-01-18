import express from "express";
import { RasiInsight, rasiChart } from "../controllers/RasiController.js";

const rasiRouter = express.Router();

rasiRouter.post("/rasiInsight", RasiInsight);
rasiRouter.post("/rasiRoute", rasiChart);



export default rasiRouter;