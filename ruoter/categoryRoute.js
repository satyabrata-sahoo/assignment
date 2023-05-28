const express = require("express");
const router = express.Router();

const category = require("../controller/categoryController");

router.post("/createcatgory",category.addCategory);

module.exports = router;