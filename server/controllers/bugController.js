import Bug from "../models/bugModel.js";

export const getBugs = async (req, res) => {
  try {
    const bugs = await Bug.find();
    res.status(200).json(bugs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching bugs" });
  }
};

export const createBug = async (req, res) => {
  try {
    const bug = new Bug(req.body);
    await bug.save();
    res.status(201).json(bug);
  } catch (error) {
    res.status(500).json({ message: "Error creating bug" });
  }
};
