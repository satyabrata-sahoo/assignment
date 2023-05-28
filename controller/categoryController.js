const categoryModel = require("../model/ctegoryModel");

exports.addCategory = (async (req, res) => {
    try {
        
        const data = {
            categoryname:req.body.categoryname,
            descrption:req.body.descrption,
        }
        const category = await categoryModel.add_category(data)
        return res.status(200).json({ status: true, category });
    } catch (error) {
       
        return res.status(400).json({ status: false, msg: "Wrong Details" });
    }
});