
const mongoose = require("mongoose");


const AdminSchema = new mongoose.Schema(
     {
       userName: {
         type: String,
        
       },
       email: {
         type: String,
       },
       password:{
        type:String,
       }
     },
     
     { timestamps: true }
   );
const Admin =mongoose.model("Admin",AdminSchema);

module.exports = Admin