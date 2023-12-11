const mongoose = require("mongoose");
require('dotenv').config();

 const connectDB = async() =>{
    try{
      await mongoose.connect("mongodb://localhost:27017");
      console.log("Mongodb connected successfully");

    }catch(error){
        console.log(error)
    }
}

module.exports = { connectDB };