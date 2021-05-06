require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//Assigning the port to the backend server
const port = process.env.PORT || 5000;

//it will let the application know that we are using express.
const app = express();

//It will let the application know that we are using json format
app.use(express.json());

app.listen(port,()=>{
    console.log(`The Server is running on PORT NO: ${port}`);
})