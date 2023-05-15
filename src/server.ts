import "dotenv/config"
import mongoose from "mongoose";

import express  from "express";

const app = express();
const port = process.env.PORT;

app.get("/",(req,res) => {
    res.send("HELLO5 WORLD!!");
});
mongoose.connect(process.env.MONGO_CONNECTION_STRING!)
    .then(()=>{
        app.listen(port,() => {
            console.log("Server running on port : "+port);
        })
    })
    .catch(console.error)
