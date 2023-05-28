const express = require("express");
const router = express.Router();

const subcategory = require("../controller/subcategoryController");

router.post("/creatsubecatgory",subcategory.addSubcategory);

module.exports = router;