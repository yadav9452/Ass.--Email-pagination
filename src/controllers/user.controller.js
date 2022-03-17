const express = require("express");
const path=require("path");

const User = require("../models/user.model");
// const Admin=require("../models/admin.models");
const transporter = require("../configs/mail");


const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const page = req.query.page || 1;
        const pagesize = req.query.pagesize || 10;


        //if page=1 then data should be from 1 to 30
        //if page=2 then data should be from 1 to 30
        const skip = (page - 1) * pagesize;

        const users = await Product.find()
            .skip(skip)
            .limit(pagesize)
            .lean()
            .exec();    
        const totalPages=Math.ceil(
            (await User.find().countDocuments())/pagesize);

        return res.status(200).send({users,totalPages});

    } catch (err) {

        return res.status(500).send({ message: err.message });

    }
});

router.post("/",async(req,res)=>{
    try{
        const user= await User.create(req.body);
        // const admin=await Admin.create(req.body);
        // console.log(path.join(__dirname,"../product.created.html"));

        transporter.sendMail({
        from: '"Amazon admin" <admin@amazon.com>,<admin@amazon.com>', // sender address
        to: user.email,// list of receivers
        subject: `Welcome to ABC system  ${user.first_name}, ${user.last_name}`, // Subject line
        text: `Hi ${user.first_name}, Please confirm your email address `, // plain text body
        html: `<b>Welcome to ABC system ${user.first_name} ${user.last_name}</b>`, // html body
       
    }
    
    );
    return res.status(201).send({message:"User Registered successfully"})

    }catch(err){
        return res.status(500).send({ message: err.message });
    }
})
module.exports = router;