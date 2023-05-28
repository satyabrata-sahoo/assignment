const express = require('express');
const router = express.Router();
const checkuserauth = require("../middleware/auth")
const admin = require("../controller/adminController");

router.use('/getcustomerlist', checkuserauth)
  

router.post("/addadmin",admin.create_admin);
 router.post("/adminlogin",admin.adminlogin);
 router.get("/getcustomerlist",admin.admingetcustomerlist);
 

module.exports=router;