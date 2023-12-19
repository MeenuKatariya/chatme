const mongoose = require("mongoose");
require("dotenv").config();

const PASSWORD = process.env.PASSWORD;

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://katariyameenu963:${PASSWORD}@chatme.emt2jk9.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log("Mongodb connected successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectDB };
