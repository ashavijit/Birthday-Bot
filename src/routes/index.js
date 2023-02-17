const express = require('express');
const router =express.Router();
const User = require('../models/user.model');


router.post('/add', async (req, res) => {
    let newFriend = new User(req.body);
    newFriend = await newFriend.save();

    res.status(201).json({newFriend});
});

module.exports = router;