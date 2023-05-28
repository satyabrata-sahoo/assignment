const mongoose = require("mongoose");

const categoryschema = new mongoose.Schema(
    {
        categoryname:String,
        descrption:String,
        status:{type:String,default:"Active"},
    },
    {timestamps:{createdAt:"created_at",updatedAt:"updated_at"}}
);

const categoryModel = mongoose.model("categories",categoryschema);

module.exports = categoryModel;