import User from "../models/User.model.js";
import ENV from "../env.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const register =async(req, res)=>{
    try {
        const {username, email, password} = req.body;
        if (!username || !email || !password){
            return res.status(400).json({
                success : false,
                message : "All fields are required!"
            });
        }
         if (password.length< 5){
            return res.status(400).json ({
                success : false ,
                message : "Password length must be 5 character"
            })
        }
        const isExisting = await User.findOne ({email});

        if (isExisting){
            return res.status(400).json ({
                success : false,
                message : "User already existed!"
            })
        }

        const hashedPassword = await bcrypt.hash(password,12);
        const newUser = await User.create ({
            username,
            email,
            password : hashedPassword,
        });

         if (!newUser){
            return res.status (400).json({
                success: false ,
                message : "Sign up failed"
            });
        }

        return res.status(201).json({
            success: true,
            message : "User register successfull"
        });
    } catch (error) {
        console.log (`Error signing up ${error}`);
        return res.status(400).json({
            success : false,
            message : "Signing up failed"
        })
    }
}

export const login =async (req, res)=>{
    try {
        const {email , password} = req.body;
        if (!email || !password){
            return res.status(400).json({
                success : false,
                message : "All fields are required!"
            });
        };

        const user = await User.findOne({ email });
         if (!user){
            return res.status(401).json({
                success: false,
                message : "Incorrect email or password !"
            })
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);

         if (!isPasswordCorrect){
            return res.status(401).json({
                success: false,
                message : "Incorrect email or password !"
            });
        };

        const accessToken = jwt.sign (
            {
                userId : user._id,
            },
            ENV.JWT_SECRET,
            {expiresIn : "7d"}
        );

        res.cookie ("accessToken" , accessToken , {
        httpOnly : true,
        secure : true,
        sameSite : "None",
        maxAge : 7 * 24 * 60 * 60 * 1000
       });

        return res.status(200).json({
        success : true ,
        accessToken,
        message : "Login Successfull",
        user : {
            username : user.username,
            userId : user._id,
            email : user.email
        }
    })

    } catch (error) {
        console.log("server error ", error);
        return res.status(500).json({
            success : false,
            message : "Login faild"
        })
    }
}

export const logOut = async (req,res)=>{
    try {
        res.clearCookie("accessToken", {
            httpOnly : true,
            secure : ENV.NODE_ENV === 'production',
            sameSite : "strict"
        })
        return res.status(200).json({
            success : true,
            message : "Logout Successfull"
        })
    } catch (error) {
        console.log("server error ", error);
        return res.status(500).json({
            success : false,
            message : "Logout failed"
        })
    }

}

export const getMe = async (req, res)=> {
    try {
        const user = await User.findById(req.userId).select("-password");
        return res.status(200).json({
            success : true,
            message : "User details fetched successfully",
            user 
        })
    } catch (error) {
        console.log (error);
        return res.status(500).json({
            success : false,
            message : "Internal server error!"
        })
    }
}
