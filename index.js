const express = require("express");
const cors = require("cors");
require('dotenv').config();
const mongoose = require("mongoose");
const survey = require("../server/routes/survey");
const AdminAuth=require('../server/routes/Authentication')
const AdminData=require('../server/routes/Admin')

const app = express();

app.use(cors());
app.use(express.json());  
app.use('/data',AdminData);
app.use('/Auth',AdminAuth);
app.use("/survey", survey);

const port = 8000;

mongoose
  .connect("mongodb+srv://survey:y913Dt1HV5fyqXdL@cluster0.9an3y9v.mongodb.net/?retryWrites=true&w=majority", { 
   
  useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(port, () => console.log("server is running on port", port)))
  .catch((error)=>console.log(error,"did not connect "))

