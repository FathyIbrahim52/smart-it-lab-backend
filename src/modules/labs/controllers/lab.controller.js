import Lab from "../../../database/schemas/lab.model.js";

// Create Lab
export const createLab = async (req, res) => {
  try {
    const lab = await Lab.create(req.body);
    res.status(201).json({
      message: "Lab created successfully",
      lab
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Labs
export const getLabs = async (req, res) => {
  try {
    const labs = await Lab.find({ isActive: true });
    res.json(labs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};