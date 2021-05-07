const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');


// Creating the schema for the client
const clientSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true
    },
    firstName:{
        type:String,
        required:[true,"First Name is required"],
        trim: true
    },
    lastName:{
        type:String,
        trim: true
    },
    phone:{
        type: String,
        minlength:10,
        maxlength:10,
       
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: [true,"Email Id already presents"],
         validate(value){
            if(!validator.isEmail(value)){
               
                throw new Error("Invalid Email");
            }
         },
         lowercase:true
    },
    address:{ 
        Street:{
            tyep:String,
        },
        City:{
            type:String
        },
        Province:{
            type:String,
            
        },
        Country:{
            type:String,
            default:'Canada'
        },
        postalCode:{
            type:String,
            validate(value){
                if(!validator.isPostalCode(value,'any')){

                    throw new Error("Invalid Postal Code");
                }
            },
            required: true
        }
    }
},
{ timestamps: true }
)

const Registration = new mongoose.model('Client',clientSchema);

module.exports = Registration;