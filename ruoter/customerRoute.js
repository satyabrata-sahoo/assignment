const express = require('express');
const router = express.Router();

const customer = require("../controller/customerController");


  

router.post("/addcustomer",customer.create_customer);
router.post("/editcustomer",customer.edit_customer);
router.delete("/deletecustomer",customer.deletecustomer);
// router.post("/studentlogin",student.student_login);


module.exports=router;