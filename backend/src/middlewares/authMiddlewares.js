import jwt from "jsonwebtoken"
import User from "../models/User.model.js";
import ENV from "../env.js"

export const authMiddleware = async(req, res , next)=>{
    try {
        const Token = req.cookies.accessToken;
        if(!Token){
            return res.status(401).json({
                success : false,
                message : "Access Token not provided!"
            })
        }
        const decoded = await jwt.verify(Token, ENV.JWT_SECRET);
        req.userId = decoded.userId;
        next ()
    } catch (error) {
        console.log (error);
        return res.status(401).json({
            success: false,
            message : "Invalid Token!"
        })
    }
}