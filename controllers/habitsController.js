import Habit from "../models/habits.model.js";

export const getHabits = async (req, res) => {
    try {
        const habits = await Habit.find();
        res.status(200).json(habits)
    } catch (error) {
       console.log('something went wrong ',error);
    }
}

export const createHabit = async (req,res) => {
    const { title } = req.body;
    try{
        const newHabit = Habit({ title });
        newHabit.save();
        res.status(200).send('new Habit created')
    }
    catch(error){
        console.log(error)
    }
}

