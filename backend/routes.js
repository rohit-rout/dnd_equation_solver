const express=require("express");
const router=express.Router();
const Variable=require('./Model');
const prefixToResult =require('./utils/calculate.js')
router.get('/variables',async(req,res)=>{
    const variables=await Variable.find();
    res.json({
        success:true,
        variables
    })
   
})
router.post('/calculate',(req,res)=>{
    const {expression,RHS}=req.body;
    let arr=expression.split(',');
    console.log(req.body);
    const result=prefixToResult(arr);
     res.json({
        result
     })

})



module.exports= router;