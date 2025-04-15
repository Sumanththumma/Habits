import mongoose from "mongoose";

const habitSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    records: [
        {
            completed: Boolean,
            date: String
        }
    ]
}, {
    timestamps: true
})

const Habit = mongoose.model('Habit',habitSchema);

export default Habit;