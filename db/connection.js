const mongoose = require("mongoose");

const db = process.env.DB_URl;

mongoose.connect(db).then(()=>{
    console.log("Connection Success");
}).catch((error)=>{
    console.log("no connection");
    console.log(error)
})