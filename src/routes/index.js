const express = require('express');
const router =express.Router();
const User = require('../models/user.model');


router.post('/add',async(req,res)=>{
    try{
        const {name,dob}=req.body;
        const user = new User({
            name,
            dob
        });
        await user.save();
        res.status(200).json({
            message:'User added successfully'
        });
    } catch(err){
        res.status(500).json({
            message:err.message
        });
    }
})

module.exports = router;