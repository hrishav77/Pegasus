const express = require('express');
const Doubt = require('../models/doubtModel');
const User = require('../models/userModel');  
const router = express.Router();

router.get('/:roomID/:username', async (req, res) =>{
    //get all doubts of a particular room for a particular user
    const roomID = req.params.roomID;
    const user = await User.find({username: req.params.username});
    try{
        const starredDoubts = user.starredDoubts;
        const doubts = await Doubts.find({roomID});
        const sDoubts = starredDoubts.filter((doubt) => {
            return doubt.roomID == roomID;
        })
        for(i = 0; i < doubts.length; i++){
            if(sDoubts.find(doubt => doubt.doubtID == doubts[i].doubtID)){
                doubts[i].starred = true;
            }else{
                doubts[i].starred = false;
            }
        }
        res.status(200).json(doubts);
         
       
    }catch (error){
        res.status(400).json({error: error.msg});
        console.log(error);
    }
});

router.post('/:roomID', async (req, res) => {
    //post the doubt in the room
    const {title, body, username, topic, subtopic, image} = req.body;
    const roomID = req.params.roomID;
    const user = await User.findOne({username});
    try{
        const roomDoubts = await Doubt.find({roomID: roomID});
        const doubtID = roomDoubts.length + 1;
        const doubt = await Doubt.create({title, body, userID: user.userID, topic, subtopic, roomID, doubtID, image });
        res.status(200).json(doubt);
    }catch(error){
        console.log(error);
    }
});

router.get('/:roomID/filters', async (req, res) => {
    //filtering doubts based on topic
    const room = req.params.roomID;
    const topic = req.body.topic;
    const subtopic = req.body.subtopic;
    const sender = req.body.sender;
    try{
        const doubt = await Doubt.find({roomID: room});
        if(!subtopic){
            doubt = doubt.filter((doubt) => doubt.topic == topic);
        }else if(!sender && !topic){
            doubt = doubt.filter(doubt => doubt.subtopic == subtopic);
        }else{
            doubt = doubt.filter(doubt => doubt.topic == topic);
            doubt = doubt.filter(doubt => doubt.subtopic == subtopic);
        }
        if(sender){
            user = await User.findOne({username: sender});
            doubt = doubt.filter(doubt => doubt.userID == user.userID);
        }
        res.status(200).json(doubt);
    }catch(error){
        res.status(400).json({error: error.msg});
    }
});

// router.get('/:roomID/filter2/:subtopic', async (req, res) => {
//     //filtering doubts based on subtopic
//     const room = req.params.roomID;
//     const subtopic = req.params.subtopic;
//     try{
//         const doubt = await Doubt.find({subtopic: subtopic, roomID: room});
//         res.status(200).json(doubt);
//     }catch(error){
//         res.status(400).json({error: error.msg});
//     }
// });

router.get('/:roomID/filter3/:username', async (req, res) => {
    //find all doubts in that room sent by a particular person
    const roomID = req.params.roomID;
    const username = req.params.username;
    const user = await User.findOne({username});
    try{
        const doubts = await Doubt.find({userID: user.userID, roomID: roomID});
        res.status(200).json(doubts);
    }catch(error){
        res.status(400).json({error: error.msg});
    }
});

router.get('/:roomID/search/:title', async (req, res) => {
    //searching the title of doubts in the search bar
    const room = req.params.roomID;
    const title = req.params.title;
    try{
        const doubt = await Doubt.find({title: title, roomID: room});
        res.status(200).json(doubt);
    }catch(error){
        res.status(400).json({error: error.msg});
    }
});

// router.get('/yourdoubts/:username', async (req, res) => {
//     //get doubts sent by a particular user
//     const username = req.params.username;
//     const user = await User.findOne({username});
//     try{
//         const doubts = await Doubt.find({userID: user.userID});
//         res.status(200).json(doubts);
//     }catch(error){
//         res.status(400).json({error: error.msg});
//     }
// });

// router.get('/starreddoubts/:username', async (req, res) => {
//     //get the starred doubts of that particular user
//     const username = req.params.username;
//     const user = await User.findOne({username});
//     try{
    //    let x = [];
    //    for (let i = 0; i < user.starredDoubts.length; i++){
    //     let doubt = await Doubt.findOne({roomID: user.starredDoubts[i].roomID, doubtID: user.starredDoubts[i].doubtID});
    //     x.push(doubt);
//        }
//        res.status(200).json(x);
//     }catch(error){
//         res.status(400).json({error: error.msg});
//     }
// });

router.put('/:roomID/starreddoubts/:username', async (req, res) => {
    //add the starred doubts of the user
    const username = req.params.username;
    const roomID = req.params.roomID;
    const doubtID = req.body.doubtID;
    try{
        const user = await User.findOne({username}, function(err, doc){
            doc.starredDoubts.push({roomID, doubtID});
            doc.save();
        }).clone();
        res.status(200).json(user);
    }catch(error){
        console.log(error);
    }
});

router.get('/starredDoubts/:username', async (req, res) => {
    //get the starred doubts of a particular room for a particular user
    const username = req.params.username;
    const user = await User.findOne({username});
    const roomID = req.body.roomID;
    try{
        if(!roomID){
            let x = [];
            for (let i = 0; i < user.starredDoubts.length; i++){
             let doubt = await Doubt.findOne({roomID: user.starredDoubts[i].roomID, doubtID: user.starredDoubts[i].doubtID});
             x.push(doubt);
            }
            res.status(200).json(x);
        }else{
            if(user.starredDoubts){
                const x = user.starredDoubts;
                const y = x.filter((item) => {
                    return item.roomID == roomID;
                });
                console.log(y);
                const z = [];
                for (i=0; i < y.length; i++){
                let doubt = await Doubt.findOne({roomID: y[i].roomID, doubtID: y[i].doubtID});
                z.push(doubt);
            }
            res.status(200).json(z);
            }
            else{
                res.send("There are no starred doubts");
            }
        }     
    }catch (error){
        res.status(400).json({error: error.msg});
    }
});

// router.get('/getall', async (req, res)=> {
//     const doubt = await Doubt.find().sort({doubtID: -1});
//     res.json(doubt);
// })

module.exports = router;