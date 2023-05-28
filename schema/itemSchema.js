const mongoose =require("mongoose");

const itemschema = new mongoose.Schema(
    {
        itemname:String,
        price:Number,
        categoryid:{type:mongoose.Types.ObjectId, ref:"categories"},
        subcategoryid:{type:mongoose.Types.ObjectId, ref:"subcategories"},
        brandname:String,
        
        specification:String,
        status:{type:String,default:"Active"}
    },
    {timestamps:{createdAt:"created_at",updatedAt:"updated_at"} }
);

const itemModel = mongoose.model("items",itemschema);

module.exports =itemModel;