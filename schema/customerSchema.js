const mongoose = require("mongoose");


const customerSchema= new mongoose.Schema(
    {
        name:String,
        email:String,
        mobile:Number,
        password:String,
        usertype:{type:String,default:"customer"},
        status:{type:String,default:"Active"},
    },
    {timestamps:{createdAt:"created_at", updatedAt:"updated_at"}}
);

const customerModel = mongoose.model("customers",customerSchema);
module.exports = customerModel;