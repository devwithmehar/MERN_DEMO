const express = require('express');
const mongoose = require('mongoose');
const router = require('express').Router();
const Client = require('../models/client.model');

// To get all the users
router.route('/').get( async (req,res) =>{
   try {
       Client.find()
       .then(users => res.json(users))
       .catch(err => res.status(400).json('Error ' + err))
   } catch (error) {
    res.status(400).send(`Erro is : ${error}`)
   }
})


router.route('/register').post( async (req,res) =>{
    try{
        //Variable are declared which will be request by user
        const{username,firstName,lastName,phone,email,address,Street,City,Province,Country,postalCode} = req.body;

        
        const newClient = new Client({
            username,firstName,lastName,phone,email,address,Street,City,Province,Country,postalCode
        })

        //The final Data will be saved in the Database
        newClient.save()
        .then( () =>{
            res.json('Client Added !')
        })
        .catch(error => {res.status(400).send(`Error occur: ${error}`)});

    } catch (error) {
        res.status(400).send(`Erro is : ${error}`)
    }
})

module.exports = router