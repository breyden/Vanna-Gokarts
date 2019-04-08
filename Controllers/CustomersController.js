 const express=require('express');
var router=express.Router();
const mongoose=require('mongoose');

const customerInfo=mongoose.model("NewsFeed");



router.get('/',(req,res)=>{
    res.render("customerInfo/form");
    
});

router.post('/',(req,res)=>{
   insertRecord(req,res);
   console.log(req.body);
    
});

function insertRecord(req,res){
   var customer=new customerInfo();
   customer.email=req.body.email;
   customer.save((err, doc) => {
    if (err)
       console.log("Error during database insertion"+err); //res.redirect('employee/list');

});
}

module.exports=router; 