
const mongoose = require("mongoose");

var productSchema = mongoose.Schema({
    name: {type : String,required :true},
    photo1 : {type : String,required:true},
    photo2 : {type : String,required:true},
    photo3 : {type : String},
    photo4 : {type : String},
    productType : {type :String,required :true},
    Brand : {type : String, required: true},
    Descripiton : {type: String, required:true },
    price : {type: Number, required:true}

})

module.exports= mongoose.model("UserModel", productSchema)

