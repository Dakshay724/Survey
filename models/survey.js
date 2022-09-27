
const mongoose = require("mongoose");


// const surveySchema = new mongoose.Schema(
//      {
//        Question: {
//          type: String,
//          default: null,
//          answers:{

//          }
//        },
//        dataType: {
//          type: String,
//          default: null,
//        },
//        extraValue:[{
//          type: String
//        }]
//      },
     
//      { timestamps: true }
//    );
// const Survey =mongoose.model("Survey",surveySchema);

// module.exports = Survey



const surveySchema = new mongoose.Schema({
  data:[]
  //  name:{
  //   type:String
  //  },
  //  mobileNo:{
  //   type:String
  //  } ,
  //  countryCode:{
  //       type:String
  //  },
  //  email:{
  //   type:String
  //  },
  //  app_Type:{
  //   type:String
  //  },
  //  project_Discription:{
  //   type:String
  //  },
  //  previous_Startup:{
  //       type:String
  //  },
  //  what_you_have_Done:{
  //   type:String
  //  },
  //  in_house_Devloper:{
  //       type:String
  //  },
  //  current_Employee:{
  //   type:String
  //  },
  //  project_Budget:{
  //   type:String
  //  },
  //  founder:{
  //   type:String
  //  },
  //  co_Founder:{
  //   type:String
  //  }

})

 const Survey =mongoose.model("Survey",surveySchema);

module.exports = Survey


