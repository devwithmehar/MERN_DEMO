require('dotenv').config();
const jwt = require('jsonwebtoken');
const Client = require('../models/client.model');


module.exports = async (req,res, next) =>{

    try{
            const token = req.header('token');
            
        
            if(!token){
            return res.status(400).send('Access Denied !')
            }
            else{
            const verified = jwt.verify(token,process.env.SECRET_KEY);
            
    
            const  client = await Client.findOne({_id: verified._id,'tokens.token': token});
            
            if(client != null){
            req.token = token;
            req.client = client;
            
            next();
        }
        else{
            throw new Error('Access Denied !')
        }
        }
      }
    catch(error){
        res.status(400).send(`${error}`)
    }
}