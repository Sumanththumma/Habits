import express from 'express';

const app = express();

const port = process.env.PORT? process.env.PORT: 3000;

app.use(express.json());

app.listen(port,()=>{
    
    console.log('server started at '+port);
})