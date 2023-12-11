const express = require("express");
const cors = require("cors");
const { chats } = require("./Database/auth")
const { connectDB } = require("./Database/index");
const userRoutes = require("./routes/userRoutes");
const chatRoute = require("./routes/chatRoute");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req,res) =>{
    res.send("Api is Running Successfully");
})

app.get("/api/chat", (req,res) =>{
    res.send(chats)
    // console.log(chats)
})

app.get("/api/chat/:id", (req,res) =>{
    const singleChat = chats.find((c)=> c._id == req.params.id);
    res.send(singleChat)
})

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoute);
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT  || 5000

connectDB().then(()=>{
    app.listen(PORT, () =>{
        console.log(`server is running in port ${PORT}`);
    })
}).catch((err) =>{
    console.log(err);
})

// app.listen(3000, console.log(`server is connect on PORT ${PORT}`))