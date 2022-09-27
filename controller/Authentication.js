const Admin=require('../models/Authentication');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');



const register=async(req,res)=>{
    try{
        const {userName,email,password}=req.body;

        if (!(userName &&  password && email)) {
            res.status(400).send("All input is required");
          }

          const oldemail = await Admin.findOne({email:email }); 
          if (oldemail) {
            return res.status(409).send("User Already Exist. Please Login");
          }
          const oldUser = await Admin.findOne({userName:userName }); 
          if (oldUser) {
            return res.status(409).send("User Already Exist. Please Login");
          }
      
          //Encrypt user password
          encryptedPassword = await bcrypt.hash(password, 10);
          // Create user in our database
          const admin = await Admin.create({
            userName:userName,
            email:email,
            time:Date.now(),
            password: encryptedPassword,
          });

          res.send(admin)
    //  if(req.body === "") return res.status(400).send("fill all the given details");

    // let UserName= await Admin.findOne({userName:userName});
    // if(UserName ) return  res.status(400).send("this Admin priviously registerd");

    // let Email= await Admin.findOne({email:email});
    // if(Email) return  res.status(400).send("this Email already registerd");

    
    // let salt=bcrypt.genSaltSync(10)
    // let hashedPassword= bcrypt.hashSync(password,salt);

    
    // let newAdmin = new Admin({
    //    userName:userName,
    //    email:email,
    //    password:hashedPassword
    // });
    // newAdmin.save().send("Admin created successfully");



    }catch(error){
        res.status(400).send("something error on server")
    }


}

const login=async(req,res)=>{
    try{
        const {userName,email,password}=req.body;
        if(req.body == "") return res.status(415).send("fill all the given details");

        const Username =await Admin.findOne({userName:userName});
        console.log(Username)
        if(!Username) return res.status(400).send("this user not exist");

        const Email=await Admin.findOne({email:email});
        if(!Email) return res.status(400).send("this email does'nt exists");

        const validPassword = bcrypt.compare(password, Email.password);
    if (!validPassword) {
        return res.status(400).send('Incorrect email or password.');
    }
    

   const token = jwt.sign({ user:Username}, 'akshay');
    res.status(200).send(token);

       // res.send("you are logged in ",token);
    }catch(error){
        res.send(error.message)
    }
}

module.exports={register,login};
