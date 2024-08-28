const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AttendanceManager = require('../models/attendanceMaanager.js');
require('dotenv').config();

exports.register = async(req, res)=>{
    console.log
    const{ email, password, confoirmPassword } =req.body;
    
    try{
        const existingUser = await AttendanceManager.findOne({email});
    if(existingUser){
        return res.status(400).send('username already exists.Please try again.');
    }
    if(password !== confirmPassword ){
        return res.status(400).send('Password do not match.');
        
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new AttendanceManager({
        email,
        password: hashedPassword
    });
    await newUser.save();
    res.redirect('/login');

    }catch(error){

    }
}