
import express,{Router} from 'express'


const routes  = express.Router();

 routes.get('/',(req, res)=>{
    
 })

 routes.post('/',(req, res)=>{
    res.send('created a habit');
})
 routes.put('/:id',(req, res)=>{
    res.send(`updtaed a habit with the id : ${req.params.id}`);
})
 routes.delete('/:id',(req, res)=>{
    res.send('deleted a Habit');
})


export default routes