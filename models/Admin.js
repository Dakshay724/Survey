
const mongoose = require("mongoose");


const Userdata = new mongoose.Schema(
    {
      question: {
        type: String,
        default: null,
      },
      dataType: {
        type: String,
        default: null,
      },
      extraValue: [{
        type: String
      }],   
    },
    
    { timestamps: true }
  );


  let User=mongoose.model("User",Userdata)
  module.exports = User