const jwt=require('jsonwebtoken');
const User=require("../model/User");
const dotenv=require('dotenv').config();

const protect=async(req, res)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try{
            token=req.headers.authorization.split(" ")[1];
            console.log(token)
            const decoded=jwt.verify(JSON.parse(token), process.env.JWT);
            console.log(decoded);
            // req.user=await User.findById(decoded.id).select("-password");
            // console.log(req.user);
            // next();
            res.end("Hey auth");
        }
        catch(error){
            console.log(error)

              return res.status(400).json({"message":"Not authorized, token failed" });
            // throw new Error("Not authorized, token failed");
        }
    }
}

module.exports=protect;