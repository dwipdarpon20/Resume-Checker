import dotenv from "dotenv";

dotenv.config();
export default {
    Mongo_URL : process.env.Mongo_URL,
    JWT_SECRET : process.env.JWT_SECRET,
    NODE_ENV : process.env.NODE_ENV,
    GOOGLE_API : process.env.GOOGLE_API_KEY,
    GROQ_API : process.env.GROQ_API
}