const jwt = require('jsonwebtoken');
const User = require('../models/userModel')

const requireAuth = async (req, res, next) =>{
    //verify Authentication
    const  Authorization  = req.headers['authorization'];
    console.log(Authorization);

    if (!Authorization) {
        return res.status(401).json({error: 'Authorization token required'});
    }

    const token = Authorization.split(' ')[1]

    try{
       const {_id} = jwt.verify(token, process.env.JWT_SECRET)
       req.user = await User.findOne({_id}).select('_id')
       next();
    }catch(error){
        console.log(error);
        res.status(401).json({error: 'Request is not Authorized'});
    }
} 

module.exports = requireAuth