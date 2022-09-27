
const Survey = require("../models/survey") 
const survey=async(req,res)=>{
    try{

        const {...data}=req.body;
      //const {name,mobileNo,countryCode,email,app_Type,project_Discription,previous_Startup,what_you_have_Done,in_house_Developers,current_Employee,project_Budget,founder,co_Founder}=req.body

        // let Name=req.body.name;
        // let MobileNo=req.body.mobileNo;
        // let CountryCode=req.body.country_Code;
        // let Email=req.body.email;
        // let ProjectDiscription=req.body.project_Discription;
        // let Previous_Startup=req.body.previous_startup;
        // let Project_Budget=req.body.project_budget;
        // let Co_Founder=req.body.co_founder;
        // let Founder=req.body.founder;
        // let In_House_Developers=req.body.in_house_developers;
        // let Current_Employee=req.body.current_employee;
        // let App_Type=req.body.App_type;
        // let WhatYouDone=req.body.what_you_done;


        // if(!name) return res.status(400).send("enter your name");

      
        // if(!mobileNo || !countryCode) return res.status(400).send("enter your mobile no with respect to countryCode");

       
        // if(!email) return res.status(400).send('enter valid email address');

        
        // if(!app_Type) return res.status(400).send('enter valid app_Type ');

   
        // if(!project_Discription) return res.status(400).send("enter project discription");

     
        // if(!what_you_have_Done) return res.status(400).send('fill the given details');

        // if(!in_house_Developers) return res.status(400).send('fill developer details');

       
        // if(!current_Employee) return res.status(400).send('fill the total employee');

        // if(!project_Budget) return res.status(400).send("fill the project budget");

        // if(!founder) return res.status(400).send("fill the perfect details");

        // if(!co_Founder) return res.status(400).send("fill the CO_Founder details");

        let newSurvey= await new Survey({
            ...req.body,
        }).save();

       res.status(200).send(newSurvey)


    }catch(error){
        res.status(400).send(error.message)

    }

};



// const addQuestion=async(req,res)=>{
//     //update user by id 

//     const survey= await Survey.findByIdAndUpdate(req.params.id,{$set:req.body},
//         {new:true}).select("-password-_v");
//         res.status(200).send({data:user});


// }
module.exports={survey}






 
