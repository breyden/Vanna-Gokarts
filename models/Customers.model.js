const mongoose=require('mongoose');

var customerSchema=new mongoose.Schema({
    email: {
        type: String
    }
});

mongoose.model('NewsFeed',customerSchema);