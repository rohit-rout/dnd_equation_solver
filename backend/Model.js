const mongoose=require("mongoose");

const variable_schema=mongoose.Schema({
    name:{
     type:String,
    },
    value:{
     type:String,
    }
})
module.exports=mongoose.model("Variable",variable_schema)