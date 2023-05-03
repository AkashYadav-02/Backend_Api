const express=require('express')
const router=express.Router();


router.get('/api/v1/bootcamps/:id',(req,res)=>{
    res.status(200).json({sucess:true,msg:'show all bootcamps'});
});
router.post('/api/v1/bootcamps',(req,res)=>{
    res.status(200).json({sucess:true,msg:'create new  bootcamps'});
});
router.put('/api/v1/bootcamps/:id',(req,res)=>{
    res.status(200).json({sucess:true,msg:`Display   bootcamps ${req.params.id}`});
});
router.delete('/api/v1/bootcamps/:id',(req,res)=>{
    res.status(200).json({sucess:true,msg:`Delete   bootcamps ${req.params.id}`});
});

