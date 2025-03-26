import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    _id: {type:Sting, required:true},
    name: {type:String, required:true},
    email: {type:String, required:true},
    image: {type:String, required:false}
},
{timestamps:true}
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;

