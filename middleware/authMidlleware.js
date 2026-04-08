const jwt = require("jsonwebtoken");
require("dotenv").config()
function authenticateUser(req,res,next){
    try{
        const authHeader = req.headers.authorization;
        if(!authHeader){
            return res.status(401).json({
                message:"No token"
            })
        }
        const token = authHeader.split(" ")[1]
        if(!token){
            return res.status(401).json({
                message:"Token is in, invalid format"
            })
        }
        const decoded = jwt.verify(token,process.env.ACCESSTOKEN);
        req.user = decoded;
        next()
    }
        catch(err){
            res.status(401).json({ message: "Invalid token" });
        }

};


module.exports = authenticateUser;