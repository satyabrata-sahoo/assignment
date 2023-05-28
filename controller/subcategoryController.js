const subcategoryModel = require("../model/subcategoryModel");

exports.addSubcategory = (async (req, res) => {
    try {
        console.log(req.body.subcategoryname)
        const data = {
            subcategoryname:req.body.subcategoryname,
            descrption:req.body.descrption,
        }
        const subcategory = await subcategoryModel.add_subcategory(data)
        return res.status(200).json({ status: true, subcategory });
    } catch (error) {
        console.log(error)
        return res.status(400).json({ status: false, msg: "Wrong Details" });
    }
});