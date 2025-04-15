
import express from 'express'
import { getHabits,createHabit, updateHabit, deleteHabit } from '../controllers/habitsController.js';


const routes  = express.Router();

 routes.get('/',getHabits);

 routes.post('/',createHabit);
 
 routes.put('/:id',updateHabit);

 routes.delete('/:id',deleteHabit);


export default routes