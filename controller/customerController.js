const customerModel = require("../model/customerModel");
const bcrypt = require("bcrypt");
exports.create_customer = (async (req, res) => {
    try {
        const data = {
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
        };
        const precustomer = await customerModel.get_customer_by_email(data.email);

        if (precustomer) {
            res.status(400).json({ status: false, msg: "Customer Allready Exist" });
        } else {
            
            data.password = await bcrypt.hash(req.body.password, 12);
            const customer = await customerModel.add_customer(data);
            return res.status(200).json({ status: true, customer });
        }
    } catch (error) {

        return res.status(400).json({ status: false, msg: "Wrong Details" });
    }
});

exports.edit_customer = (async (req, res) => {
    try {
        const obj = {
            name: req.body.name,
            mobile: req.body.mobile,
        }
        const customer = await customerModel.edit_customer(req.body.id, obj);
        return res.status(200).json({ status: true, msg: "Customer Upadate Successfully", customer });
    } catch (error) {

        return res.status(400).json({ status: false, msg: "Wrong Details" });
    }
});

exports.deletecustomer = (async (req, res) => {
    try {

        const customer = await customerModel.delete_customer(req.query.id);
        return res.status(200).json({ status: true, msg: "Customer delete Successfully" });
    } catch (error) {

        return res.status(400).json({ status: false, msg: "Wrong Details" });
    }
});

