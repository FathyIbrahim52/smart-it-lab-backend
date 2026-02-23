import express from "express";
import { createLab, getLabs } from "./controllers/lab.controller.js";
import authMiddleware from "../auth/auth.middleware.js";

const router = express.Router();

// Public
router.get("/", getLabs);

// Protected
router.post("/", authMiddleware, createLab);

export default router;  