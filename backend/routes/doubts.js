const express = require('express');
const Doubt = require('../models/doubtModel');
const User = require('../models/userModel');  
const router = express.Router();
const requireAuth =require('../middleware/requireAuth')

router.use(requireAuth);

router.post('/starreddoubts', async (req, res) => {
    //get the starred doubts of a particular room for a particular user
    const username = req.body.username;
    const user = await User.findOne({username});
    const roomID = req.body.roomID;
    try{
        if(!roomID){
            let x = [];
            for (let i = 0; i < user.starredDoubts.length; i++){
             let doubt = await Doubt.findOne({roomID: Number(user.starredDoubts[i].roomID), doubtID: user.starredDoubts[i].doubtID});
             x.push(doubt);
            }
            let doubts =[]
            for (let i = 0; i < x.length; i++){
                let user2 = await User.findOne({userID: x[i].userID});
                let y = x[i].toObject();
                y.username = user2.username;
                doubts.push(y);
            }
            res.status(200).json(doubts);
        }else{
            if(user.starredDoubts){
                const x = user.starredDoubts;
                const y = x.filter((item) => {
                    return item.roomID == roomID;
                });
                const z = [];
                for (i=0; i < y.length; i++){
                let doubt = await Doubt.findOne({roomID: Number(y[i].roomID), doubtID: y[i].doubtID});
                z.push(doubt);
            }
            let doubts =[]
            for (let i = 0; i < z.length; i++){
                let user3 = await User.findOne({userID: z[i].userID});
                let a = z[i].toObject();
                a.username = user3.username;
                doubts.push(a);
            }
            res.status(200).json(doubts);
            }
            else{
                res.send("There are no starred doubts");
            }
        }     
    }catch (error){
        res.status(400).json({error: error.msg});
    }
});

router.post('/getroomdoubts', async (req, res) =>{
    //get all doubts of a particular room for a particular user
    const roomID = req.body.roomID;
    const user = await User.findOne({username: req.body.username});
    const number = req.body.number;
    try{
        let starredDoubts = user.starredDoubts;
        // const doubts = await Doubt.find({roomID},{skip: number, limit: number+10, sort: {doubtID: -1}});
        const doubts = await Doubt.find({roomID});
        const sDoubts = starredDoubts.filter((doubt) => {
            return doubt.roomID == roomID;
        });
        const result = [];
        
        for(let i = 0; i < doubts.length; i++){
            let x = doubts[i].toObject();
            let user2 = await User.findOne({userID: doubts[i].userID});
            x.username = user2.username
            if(sDoubts.find(doubt => doubt.doubtID == doubts[i].doubtID)){
                x.starred = true;
                console.log("HI");
            }else{
                x.starred = false;
                console.log(doubts[i]);
            }
            result.push(x);
        }
        res.status(200).json(result);
         
       
    }catch (error){
        res.status(400).json({error: error.msg});
        console.log(error);
    }
});

router.post('/postdoubt', async (req, res) => {
    //post the doubt in the room
    const title = req.body.title;
    const topic = req.body.topic;
    const subtopic = req.body.subtopic;
    const body = req.body.body;
    const username = req.body.username;
    const image = req.body.image;
    const roomID = req.body.roomID;
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

router.post('/filters', async (req, res) => {
    //filtering doubts based on topic
    const room = req.body.roomID;
    const topic = req.body.topic;
    const subtopic = req.body.subtopic;
    const sender = req.body.sender;
    try{
        if (!room){
            let doubt = await Doubt.find();
            if(!subtopic){
                if(!topic){
                    doubt = doubt;
                }else{
                    doubt = doubt.filter((doubt) => doubt.topic == topic);
                }
                
            }else if(!topic){
                doubt = doubt.filter(doubt => doubt.subtopic == subtopic);
            }else{
                doubt = doubt.filter(doubt => doubt.topic == topic);
                doubt = doubt.filter(doubt => doubt.subtopic == subtopic);
            }
            if(sender){
                let user = await User.findOne({username: sender});
                doubt = doubt.filter(doubt => doubt.userID == user.userID);
            }
            res.status(200).json(doubt);
        }
        else{
            let doubt = await Doubt.find({roomID: room});
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
            let doubts =[]
            for (let i = 0; i < doubt.length; i++){
                let user = await User.findOne({userID: doubt[i].userID});
                let x = doubt[i].toObject();
                x.username = user.username;
                doubts.push(x);
            }
            res.status(200).json(doubts);
        }
        
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

// router.get('/:roomID/filter3/:username', async (req, res) => {
//     //find all doubts in that room sent by a particular person
//     const roomID = req.params.roomID;
//     const username = req.params.username;
//     const user = await User.findOne({username});
//     try{
//         const doubts = await Doubt.find({userID: user.userID, roomID: roomID});
//         res.status(200).json(doubts);
//     }catch(error){
//         res.status(400).json({error: error.msg});
//     }
// });

router.post('/searchtitle', async (req, res) => {
    //searching the title of doubts in the search bar
    const room = req.body.roomID;
    const title = req.body.title;
    try{
        const doubt = await Doubt.find({title: title, roomID: room});
        let doubts =[]
            for (let i = 0; i < doubt.length; i++){
                let user = await User.findOne({userID: doubt[i].userID});
                let x = doubt[i].toObject();
                x.username = user.username;
                doubts.push(x);
            }
        res.status(200).json(doubts);
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

router.put('/starreddoubts', async (req, res) => {
    //add the starred doubts of the user
    const username = req.body.username;
    const roomID = req.body.roomID;
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

router.put('/unstardoubt', async (req, res) => {
    //unstar a doubt
    const username = req.body.username;
    const roomID = req.body.roomID;
    const doubtID = req.body.doubtID;
    try{
        const user = await User.updateOne({username}, {$pull: {starredDoubts: {roomID, doubtID}}});
        res.status(200).json(user);
    }catch(error){
        res.status(400).json({error: error.msg});
    }
    
})


// router.get('/getall', async (req, res)=> {
//     const doubt = await Doubt.find().sort({doubtID: -1});
//     res.json(doubt);
// })

module.exports = router;