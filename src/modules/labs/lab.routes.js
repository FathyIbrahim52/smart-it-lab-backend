import express from "express";
import { createLab, getLabs } from "./controllers/lab.controller.js";
import { protect, authorize } from "../auth/auth.middleware.js";

const router = express.Router();

router.get("/", getLabs);
router.post("/", protect, authorize("admin"), createLab);

export default router;