import Habit from "../models/habits.model.js";

export const getHabits = async (req, res) => {
  try {
    const habits = await Habit.find();
    res.status(200).json(habits);
  } catch (error) {
    console.log("Something went wrong", error);
    res.status(500).send("Failed to fetch habits");
  }
};

export const createHabit = async (req, res) => {
  const { title } = req.body;
  try {
    const newHabit = new Habit({ title });
    const savedHabit = await newHabit.save();
    res.status(201).json(savedHabit); 
  } catch (error) {
    console.log(error);
    res.status(500).send("Failed to create habit");
  }
};

export const updateHabit = async (req, res) => {
  const { id } = req.params;
  const { title, records } = req.body;
  try {
    const updated = await Habit.findByIdAndUpdate(
      id,
      { title, records },
      { new: true }
    );
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).send("Error while updating");
  }
};

export const deleteHabit = async (req, res) => {
  const { id } = req.params;
  try {
    await Habit.findByIdAndDelete(id);
    res.status(200).json({ message: "Habit deleted successfully" });
  } catch (error) {
    res.status(500).json({
      failure: "Delete operation failed",
    });
  }
};
