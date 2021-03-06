const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');
const { route } = require("express/lib/router");

// REGISTER
router.post("/register", async (req, res) => {
  
  try{
    // generate pwd
    const salt = await bcrypt.genSalt(10);
    const hashedPwd = await bcrypt.hash(req.body.password, salt);

    // create user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPwd,
    });

    // save user & resp
    const user = await newUser.save()
    res.status(200).json(user)
  } catch(err){
    console.log(err);
  }
  
});

// login
router.post("/login", async (req, res)=>{
  try{
    const user = await User.findOne({email:req.body.email})
    !user && res.status(400).json("wrong credentials") 

    const validPwd = await bcrypt.compare(req.body.password, user.password)
    !validPwd && res.status(400).json("wrong credentials");

    const {password,...others} = user._doc; 
    res.status(200).json(others);
  } catch(err){
    res.status(500).json(err);
  }
})

module.exports = router;