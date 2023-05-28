const adminModel = require("../model/adminModel");
const customer = require("../model/customerModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.create_admin = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,
    };
    const preadmin = await adminModel.get_admin_by_email(data.email);

    if (preadmin) {
      res.status(400).json({ status: false, msg: "Admin Allready Exist" });
    } else {
      data.password = await bcrypt.hash(req.body.password, 12);

      const admin = await adminModel.add_admin(data);

      return res
        .status(200)
        .json({ status: true, msg: "success", data: admin });
    }
  } catch (error) {
    return res.status(400).json({ status: false, msg: "Wrong Details" });
  }
};

exports.adminlogin = async (req, res) => {
  try {
    const admin = await adminModel.get_admin_by_email(req.body.email);
    if (!admin) {
      return res.status(400).json({ status: false, msg: "User Not Found" });
    }
    const checkpsw = bcrypt.compare(req.body.password, admin.password);
    if (checkpsw) {
      const token = jwt.sign(
        { adminId: admin._id },
        process.env.JWT_SECRET_KEY,
        { expiresIn: 60 * 20 }
      );
      admin.token = token;
      await admin.save();
      return res.status(200).json({ success: true, admin });
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect password" });
    }
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, message: `${error.message}` });
  }
};

exports.admingetcustomerlist = async (req, res) => {
  try {
    if (req.user.usertype === "admin") {
      const getcustomer = await adminModel.get_all_customer();
      res.status(200).json({ status: true, getcustomer });
    } else {
      return res
        .status(400)
        .json({ status: false, message: "You are not an admin" });
    }
    res.status(200).json({ success: true });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, message: `${error.message}` });
  }
};
