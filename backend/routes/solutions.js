const express = require('express');
const Solution = require('../models/solutionModel');
const router = express.Router();
const requireAuth =require('../middleware/requireAuth');
const User = require('../models/userModel');

router.use(requireAuth);

router.post('/roomID/:doubtID', async (req, res) => {
    const roomID = req.body.roomID;
    const doubtID = req.params.doubtID;
    try{
        const solutions = await Solution.find({roomID: roomID, doubtID: doubtID});
        let x =[];
        for (let i = 0; i < solutions.length; i++){
            let user = await User.findOne({userID: solutions[i].userID});
            let y = solutions[i].toObject();
            y.username = user.username;
            x.push(y);
        }
        res.status(200).json(x);
    }catch(error){
        res.status(400).json({error: error.msg});
        console.log(error);
    }
});

router.post('/:roomID/:doubtID', async (req, res) => {
    const roomID = req.params.roomID;
    const doubtID = req.params.doubtID;
    const user = await User.findOne({username: req.body.username});
    try{
        const solution = await Solution.create({body: req.body.body, userID: user.userID, roomID, doubtID});
        res.status(200).json(solution);
    }catch(error){
        res.status(400).json({error: error.msg});
    }
});

module.exports = router