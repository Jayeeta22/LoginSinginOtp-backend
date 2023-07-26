const mongoose = require("mongoose");

const DB = process.env.DATABASE || "mongodb://localhost:27017/mydb"

mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>console.log("Database Connected"))
.catch((error)=>{
    console.log("error",error);
})