import express from "express";
import { protect } from "../../common/middleware/auth.middleware.js";
import User from "../../database/schemas/user.model.js";

const router = express.Router();

// GET /api/users/me
router.get("/me", protect, async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
});

export default router;