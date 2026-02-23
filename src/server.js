import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import authRoutes from "./modules/auth/auth.routes.js";
import userRoutes from "./modules/users/user.routes.js";
import labRoutes from "./modules/labs/lab.routes.js";
import instanceRoutes from "./modules/instances/instance.routes.js";
dotenv.config();

const app = express();
app.use("/api/users", userRoutes);
app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/api/labs", labRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/instances", instanceRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Smart IT Lab Backend Running " });
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});