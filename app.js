const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const db =require("./db/connection")
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const customer = require("./ruoter/customerRoute");
const admin = require("./ruoter/adminRoute");
const category = require("./ruoter/categoryRoute");
const item = require("./ruoter/itmeRoute");
const subcategory = require("./ruoter/subcategoryRoute");

app.use(category);
app.use(customer);
app.use(admin);
app.use(item);
app.use(subcategory);

app.listen(port,()=>{
    console.log(`Server is running ${port} `)
})