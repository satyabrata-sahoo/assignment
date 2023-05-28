const express = require("express");
const router = express.Router();
const item = require("../controller/itemController");

router.post("/additem",item.addItem);
router.get("/searchitem",item.searchItem);

module.exports=router;

