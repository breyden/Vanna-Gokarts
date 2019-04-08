const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/CustomersDB',{useNewUrlParser:true},(err)=>{
    if (!err){
        console.log("successfuly connected to the database");
    }
    else{
        console.log("error connecting to the database"+err);
    }
});

require('./Customers.model');