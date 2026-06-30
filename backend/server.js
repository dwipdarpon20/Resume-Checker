import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
import { connectDb } from "./src/db/connectDb.js";
import authRoutes from "./src/routes/authRoutes.js"
import { jobDescription ,selfDescription , resume } from "./data.js";
import {generateInterviewReport} from "./src/services/ai.services.js";
import { groqInterviewReport } from "./src/services/aiGroq.services.js";
import interviewRoutes from "./src/routes/interview.routes.js"



const app = express ();
const PORT = 8080;

//Uses are here 
app.use (express.json());
app.use (cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use (cors({
    origin : `http://localhost:5173`,
    credentials : true
}))

// All Routes are here 
app.use ("/api/auth", authRoutes);
app.use("/api/interview" , interviewRoutes)

// groqInterviewReport({resume,selfDescription,jobDescription})
// generateInterviewReport({resume, selfDescription , jobDescription});
 
connectDb()
app.listen (PORT , ()=>{
    console.log(`Server is running on port ${PORT}`)
});