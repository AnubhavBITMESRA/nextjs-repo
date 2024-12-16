import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please add a username"],
        unique:true,
    },
    email:{
        type:String,
        required:[true,"Please add an email"],
    },
    password:{
        type:String,
        required:[true,"Please add an password"],
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    forgotPasswordToken:String,
    forgotPasswordTokenExpiry:Date,
    verifyToken:String,
    verifyTokenExpiry:Date
})

const User = mongoose.models.users || mongoose.model("users",userSchema)

export default User