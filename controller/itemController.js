const itemModel = require("../model/itemModel");

exports.addItem = (async (req, res) => {
    try {
        const data = {
            itemname:req.body.itemname,
            price:req.body.price,
            categoryid:req.body.categoryid,
            brandname:req.body.brandname,  
            
            specification:req.body.specification,  
            subcategoryid:req.body.subcategoryid,  
        }
        const item = await itemModel.add_item(data)
        return res.status(200).json({ status: true, item });
    } catch (error) {
       
        return res.status(400).json({ status: false, msg: "Wrong Details" });
    }
});

exports.searchItem = (async (req, res) => {
    try {
       const item = await itemModel.search_item(req.query);
        return res.status(200).json({ status: true, item });
    } catch (error) {
     
        return res.status(400).json({ status: false, msg: "Wrong Details" });
    }
});