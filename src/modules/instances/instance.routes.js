import express from "express";
import { protect, authorize } from "../auth/auth.middleware.js";
import { startLab } from "./controllers/instance.controller.js";

const router = express.Router();

router.post("/start", protect, authorize("user"), startLab);

export default router;