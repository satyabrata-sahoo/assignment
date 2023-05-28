const mongoose = require("mongoose");

const subcategoryschema = new mongoose.Schema(
    {
        subcategoryname:String,
        descrption:String,
        status:{type:String,default:"Active"},
    },
    {timestamps:{createdAt:"created_at",updatedAt:"updated_at"}}
);

const subcategoryModel = mongoose.model("subcategories",subcategoryschema);

module.exports = subcategoryModel;