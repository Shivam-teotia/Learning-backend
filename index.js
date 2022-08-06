/*const shivam=require("./second")
const os=require('os'); 
const path=require('path');

//const validator=require('validator');
//const chalk=require('chalk');

console.log("Namaste world!,");
console.log(shivam);
console.log(os.freemem());
console.log(os.homedir());
console.log(os.totalmem());
console.log(os.type());
//console.log(path.basename());
const a=path.extname(__filename);
console.log(a);
*/

/*const res=validator.isEmail("shivamteotia200@gamil.com");
console.log(res);
*/
//console.log(exports,require,module,__filename,__dirname);
const express=require('express');
const path=require('path');
const port=8000;

const db=require('./config/mongoose');
const Contact=require('./models/contact')


const app=express();
const ejs=require('ejs');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded());
app.use(express.static('assets'));
//middleware 
app.use((req,res,next)=>{
    console.log('Middleware 1 called');
    next();
})
var ContactList=[
    {
        name:"Shivam",
        phone:"1234567891"
    },
    {
        name:"Tonny Jonh",
        phone:"0987654321"
    },
    {
        name:"Coding Ninjas",
        phone:"4567890321"
    }
]
app.get('/',(req,res)=>{
    //console.log(__dirname);
    //res.send('<h1>cool it is running</h1>')
    return res.render('practice',{
        title:"TITLE",
        conatact_list:ContactList
    });
});
app.get('/practice',(req,res)=>{

    Contact.find({},function(err,contacts){
        if(err){
            console.log("error in fetching data from db");
            return ;
        }
        return res.render('home',{
            title:"Contact List",
            conatact_list: contacts
        })
    })
    /*return res.render('home',{
        title:"play with ejs",
        conatact_list:ContactList
    });*/
})

app.post('/create-contact',(req,res)=>{
    /*ContactList.push({
        name:req.body.name,
        phone:req.body.number
    });*/
    
   console.log(req.body.name);
   console.log(req.body.number);
   Contact.create({
    name: req.body.name,
    phone: req.body.number
   },((err,newContact)=>{
    if(err){
        console.log('error in creating a contact');
        return;
    }
    console.log('***********',newContact);
    return res.redirect('back');
   }))
    //return res.redirect('back');
})
app.listen(port,(err)=>{
    if(err){
        console.log('error');
        return;
    }
    console.log('Server is running seccessfully');
})