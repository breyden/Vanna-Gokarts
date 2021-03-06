require('./models/db')

const express=require('express');
const path=require('path');
const exphb=require('express-handlebars');
const bodyParser = require('body-parser')


const CustControl=require('./Controllers/CustomersController');
var app=express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.use(express.static(__dirname + '/mp4'));
app.use(express.static(__dirname + '/vendor'));
app.use(express.static(__dirname + '/css'));


app.set('views',path.join(__dirname,'/views/'))
app.engine('hbs',exphb({extname:'hbs',defaultLayout:'index',layoutsDir:__dirname+'/views/layouts'}));
app.set('view engine','hbs');


app.listen(4000,()=>{
    console.log('express server started at port 4000');
})

app.use('/',CustControl);