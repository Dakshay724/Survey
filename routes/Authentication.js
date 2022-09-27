const router=require('express').Router();
const {login,register}=require('../controller/Authentication');
const auth=require('../middleware/Authentication')
router.post('/login',login);
router.post('/register',register);
router.get('/auth',auth,(req,res)=>{
    res.send("you are in protected route")
})
module.exports=router