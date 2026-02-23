import express from "express";
import { register, login } from "./controllers/auth.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router;
// import express from "express";
// import User from "../../database/schemas/user.model.js";
// import jwt from "jsonwebtoken";
// import { login } from "../controllers/auth.controller.js";
// import { register } from "./auth.controller.js";

// router.post("/login", login);

// const router = express.Router();

// // REGISTER

// router.post("/register", register);
// router.post("/login", login); 

// router.post("/register", async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     // check if user exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     // create user
//     const user = await User.create({ name, email, password });

//     // create token
//     const token = jwt.sign(
//       { id: user._id, role: user.role },
//       process.env.JWT_SECRET,
//       { expiresIn: "1d" }
//     );

//     res.status(201).json({
//       message: "User created successfully",
//       token
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// export default router;
