import express from "express";
import { protect, authorize } from "../auth/auth.middleware.js";
import { startLab, stopLab } from "./controllers/instance.controller.js";

const router = express.Router();

// Start Lab
router.post(
  "/start",
  protect,
  authorize("student", "admin"),
  startLab
);

// Stop Lab
router.post(
  "/:id/stop",
  protect,
  authorize("student", "admin"),
  stopLab
);

export default router;