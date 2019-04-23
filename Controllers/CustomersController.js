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
    if (err){
        if (err.email=='ValidationError'){
            handleValidationError(err, req.body);
            res.render("customerInfo/form", {
               
                customer: req.body    // updated error messages
            });
          }
          else{
             //console.log("Error during database insertion"+err); 
          }
    }
     
   



});
}
function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'email':
                body['emailError'] = err.errors[field].message;
                break;
        }
    }
}
module.exports=router; 