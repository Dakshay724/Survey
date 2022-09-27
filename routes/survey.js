const router=require('express').Router();
const {survey}=require('../controller/survey');

router.post('/surveyData',survey);
//router.post('/',admin,survey);
module.exports=router
