import mongoose from "mongoose";

let isConnected = false;
export const connectDB=async ()=>{
    mongoose.set('strictQuery',true);
    if(isConnected){
        console.log("Connected to Mongoose");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            dbName:"prompt-pedia",
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        isConnected=true;
        console.log("Connected to Mongoose");
    } catch (error) {
        console.log("Failed to connect to Mongoose");
    }
}