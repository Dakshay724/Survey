const router=require('express').Router();
const {createData,deleteData,updateData,getAllData,getDataById}=require('../controller/Admin');
const auth=require('../middleware/Authentication')

router.post('/createData',auth,createData);
router.delete('/deleteData/:id',auth,deleteData);
router.put('/updateData',auth,updateData);
router.get('/getAllData',auth,getAllData);
router.get('/getDataById/:id',auth,getDataById);


module.exports=router;