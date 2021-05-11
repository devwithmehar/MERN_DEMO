require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const client = require('./routers/client')

//Assigning the port to the backend server
const port = process.env.PORT || 5000;

//Creating a server
const app = express();

app.use(cors());
//It will let the application know that we are using json format
app.use(express.json());

const mongo = process.env.Mongo_CONNECTION;

//connecting the application with our cluster
mongoose.connect(mongo,{
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology:true,
    useFindAndModify:false
})

const connection = mongoose.connection;

connection.once('open',() =>{
    console.log('The Database has been Established');
})

app.use('/client',client)

app.listen(port,()=>{
    console.log(`The Server is running on PORT NO: ${port}`);
})