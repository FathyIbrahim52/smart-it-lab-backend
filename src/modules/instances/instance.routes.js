import express from "express";
import authMiddleware from "../auth/auth.middleware.js";
import { startLab } from "./controllers/instance.controller.js";

const router = express.Router();

router.post("/start", authMiddleware, startLab);

export default router;