const express = require('express');
const mongoose = require('mongoose');
const router = require('express').Router();


router.route('/').get( (req,res) =>{
    res.status(200).send('This file is working');
})

module.exports = router