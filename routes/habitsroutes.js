
import express,{Router} from 'express'

import { getHabits,createHabit } from '../controllers/habitsController';
const routes  = express.Router();

 routes.get('/',getHabits());

 routes.post('/',createHabit());
 routes.put('/:id',(req, res)=>{
    res.send(`updtaed a habit with the id : ${req.params.id}`);
})
 routes.delete('/:id',(req, res)=>{
    res.send('deleted a Habit');
})


export default routes