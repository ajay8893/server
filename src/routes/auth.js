const express=require("express");
const router=express.Router();

router.post("/login",(req,res)=>{
    res.send("login success...");
})

router.post("/register",(req,res)=>{
    res.send("register success");
})

module.exports=router;