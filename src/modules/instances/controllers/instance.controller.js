import LabInstance from "../../../database/schemas/labInstance.model.js";
import Lab from "../../../database/schemas/lab.model.js";

export const startLab = async (req, res) => {
  try {
    const { labId } = req.body;

    const lab = await Lab.findById(labId);
    if (!lab) {
      return res.status(404).json({ message: "Lab not found" });
    }

    const existing = await LabInstance.findOne({
      user: req.user._id,
      lab: labId,
      status: "running",
    });

    if (existing) {
      return res.status(400).json({
        message: "Lab already running",
      });
    }

    const instance = await LabInstance.create({
      user: req.user._id,
      lab: labId,
    });

    res.status(201).json({
      message: "Lab started successfully",
      instance,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};