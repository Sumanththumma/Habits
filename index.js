import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routes from './routes/habitsroutes.js';

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log('connected to MONGODB succesfully'));

const port = process.env.PORT? process.env.PORT: 3000;

app.use(express.json());

app.use('/api/habits',routes);

app.listen(port,()=>{

    console.log('server started at '+port);
})