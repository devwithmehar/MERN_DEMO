const express = require('express');
const mongoose = require('mongoose');
const router = require('express').Router();
const Client = require('../models/client.model');
const bycrypt = require('bcrypt');
const auth_client = require('../authentication/auth_client');


// To get all the users
router.route('/').get( async (req,res) =>{
   try {
       Client.find()
       .then(users => res.json(users))
       .catch(err => res.status(400).json('Error ' + err))
   } catch (error) {
    res.status(400).send(`Error is : ${error}`)
   }
})


// Router to Register the users in the website
router.route('/register').post( async (req,res) =>{
    try{
        //Variable are declared which will be request by user
        const{username, fullName,phone,email,
            address,Street,City,Province,Country,postalCode,
            password,confirmpassword} = req.body;
        
        //If the passwords will match only then it will be saved at database
        if(password === confirmpassword)
        {
            const newClient = new Client({
                username, fullName,phone,email,address,Street,City,Province,Country,postalCode,password
            });

            //The final Data will be saved in the Database
            newClient.save()
            .then( (client) =>{
                res.json(client)
            })
            .catch(error => {res.status(400).send(`Error occur: ${error}`)});

        }
        
        //Otherwise it will throw the error
        else{
           throw new Error("The passwords do not match");
        }


    } catch (error) {
        res.status(400).send(`Error is : ${error}`)
    }
})



//Router to login in the website for the users
router.route('/login').post(async(req,res) =>{
    try {
        const {username,password} = req.body;

        const client = await Client.findOne({username}); // to find the data for the particular client
        
        // If the username does not exist in the database then it will throw error
        if(!client)
        {
            throw new Error("Username or Password is Invalid !")
        }
        //If the username exist in the database then it will check if the password matched or not
        else
        {
        const isMatch = await bycrypt.compare(password,client.password);  // to compare the passwords
        

        if(isMatch){

            //Adding the middleware to generate token for the particular user
            const token = await client.generateAuthToken();

            Client.findOne({username})
            .then((user) =>{
                res.header('token',token).send(user);
            })
            .catch(err => res.status(400).json('Error ' + err));
        }
        else{
            throw new Error("Username or Password is Invalid !")
        }

    }

        
    } catch (error) {
        res.status(400).send(`Error is : ${error}`)
    }
})


//Router to get the information of client who has loged in 
router.route('/login/client').get(auth_client , async(req,res) =>{
    try {

        Client.find({_id :req.client._id})
       .then(users => res.json(req.client))
       .catch(err => res.status(400).json('Error ' + err))
        
    } catch (error) {
        res.status(400).send(`Error is ${error}`)
    }
})


// Router to do logout for the client 
router.route('/logout').post(auth_client, async(req,res) =>{
    try {
        
        
        req.client.tokens = req.client.tokens.filter( (token) =>{
           
             return token.token !== req.token;
             
        }) 

        await req.client.save();
        res.header('token','').send('You are loged out !')
        
    } catch (error) {
        res.status(400).send(`Error is : ${error}`)
    }
})

module.exports = router