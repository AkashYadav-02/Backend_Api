const express=require('express');
const dotenv=require('dotenv');
const app=express();


dotenv.config({path:'./config/config.env'});






// app.get('/api/v1/bootcamps/:id',(req,res)=>{
//     res.status(200).json({sucess:true,msg:'show all bootcamps'});
// });
// app.post('/api/v1/bootcamps',(req,res)=>{
//     res.status(200).json({sucess:true,msg:'create new  bootcamps'});
// });
// app.put('/api/v1/bootcamps/:id',(req,res)=>{
//     res.status(200).json({sucess:true,msg:`Display   bootcamps ${req.params.id}`});
// });
// app.delete('/api/v1/bootcamps/:id',(req,res)=>{
//     res.status(200).json({sucess:true,msg:`Delete   bootcamps ${req.params.id}`});
// });


const PORT= process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log(`server running in ${process.env.NODE_ENV}  mode on at ${PORT}`);
})