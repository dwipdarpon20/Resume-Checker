import mongoose from "mongoose";
import ENV from "../env.js"

export const connectDb = async()=> {
    try {
        await mongoose.connect(ENV.Mongo_URL);
        console.log("MongoDB connected successfully ✅");
    } catch (error) {
        console.log(error , "MongoDB connection failed ❌");
        process.exit(1);
    }
}