import app from "./app";
import mongoose from "mongoose";
import env from "./utils/validateEnv";


const port = process.env.PORT;

mongoose.connect(env.MONGO_CONNECTION_STRING!)
    .then(()=>{
        app.listen(port,() => {
            console.log("Server running on port : "+port);
        })
    })
    .catch(console.error)
