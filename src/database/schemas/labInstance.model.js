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
      enum: ["running", "stopped"],
      default: "running",
    },
    startedAt: {
      type: Date,
      default: Date.now,
    },
    stoppedAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

export default mongoose.model("LabInstance", labInstanceSchema);