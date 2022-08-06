const express=require('express');
const path=require('path');
const port=8000;
const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))

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
    return res.render('home',{
        title:"Contact List",
        contact_list:ContactList
    });
});

app.get('/practice',(req,res)=>{
    return res.render('practice',{
        title:"Let us play with ejs"
    });
});

app.listen(port,(err)=>{
    if(err){
        console.log('Error is running the server',err);
    }
    console.log("yeah!, My server is running");
})