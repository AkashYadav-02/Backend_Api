const express=require('express');
const dotenv=require('dotenv');
const app=express();


dotenv.config({path:'../config/config.env'});

const PORT= process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log(`server running in ${process.env.NODE_ENV}  mode on at ${PORT}`);
})