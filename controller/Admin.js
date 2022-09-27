const User=require('../models/Admin');


const getAllData = async (req, res) => {
    try {
        const allQuestion= await User.find()
      res.json({ data: allQuestion, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

const createData = async (req, res) => {
    try {
        const question=await User.create(req.body);
      res.json({ data: question, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };



  const getDataById = async (req, res) => {
    try {
        const questionDataById=await User.findById(req.params.id)
      res.json({ data: questionDataById, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };



const updateData = async (req, res) => {
    try {
        const UpdateData=await User.findByIdAndUpdate(req.params.id, req.body)
      res.json({ data: UpdateData, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
   


  const deleteData = async (req, res) => {
    try {
        const deleteData=await User.findByIdAndDelete(req.params.id);
      res.json({ data: deleteData, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };


  module.exports={createData,deleteData,updateData,getAllData,getDataById}
  
     
     
  
     
   
     
    