const express=require('express');
const path=require('path');
const port=3000;
const app=express();
const hbs=require('hbs');
const publicpath=path.join(__dirname,'../public')
const templatepath=path.join(__dirname,'../templates/views')
const componentpath=path.join(__dirname,'../templates/partials');

app.set('view engine','hbs');
app.set('views',templatepath)
hbs.registerPartials(componentpath);
app.use(express.static(publicpath));
app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/about',(req,res)=>{
    res.render('about');
})
app.get('/service',(req,res)=>{
    res.render('service');
})
app.get('/gallary',(req,res)=>{
    res.render('gallary');
})
app.get('/web',(req,res)=>{
    res.render('web')
})
app.get('/android',(req,res)=>{
    res.render('android');
})
app.get('/python',(req,res)=>{
    res.render('python');
})
app.get('/ai',(req,res)=>{
    res.render('ai');
})
app.get('/data',(req,res)=>{ 
    res.render('data');
})
app.get('/iot',(req,res)=>{
    res.render('iot');
})
app.get('/register',(req,res)=>{
    res.render('register');
})

app.listen(port);