import mongoose from "mongoose";

const labInstanceSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    lab: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lab",
      required: true,
    },
    status: {
      type: String,
      enum: ["running", "completed", "expired"],
      default: "running",
    },
    startedAt: {
      type: Date,
      default: Date.now,
    },
    completedAt: {
      type: Date,
    }
  },
  { timestamps: true }
);

const LabInstance = mongoose.model("LabInstance", labInstanceSchema);

export default LabInstance;