const mongoose = require("mongoose");


const adminSchema= new mongoose.Schema(
    {
        name:String,
        email:String,
        mobile:Number,
        password:String,
        token:String,
        usertype:{type:String,default:"admin"},
        status:{type:String,default:"Active"},
    },
    {timestamps:{createdAt:"created_at", updatedAt:"updated_at"}}
);

const adminModel = mongoose.model("admins",adminSchema);
module.exports = adminModel;