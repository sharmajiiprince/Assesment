const express=require('express');
const cores=require('cors');
const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Assesment').then(()=>{
    console.log('connected database');
}).catch((err)=>{
    console.log(err);
})
const student=require('./model');
const app=new express();

app.use(express.json());
app.use(cores());

app.get('/list',async(req,res)=>{
    let data=await student.find({});
    res.send(data);
})

app.get('/',async(req,res)=>{
    let data=await student.find({});
    res.send(data);
})

app.get('/list/:StuId',async(req,res)=>{
    let data=await book.find({"StuId":req.params.body});
    res.send(data);
})

app.post('/list',async(req,res)=>{
    let data=new student(req.body);oooooooooooo
     let result=await data.save();
    res.send(result);
})

app.post('/admin',async(req,res)=>{
    let data=new student(req.body);
     let result=await data.save();
    res.send("added!");
})

app.put('/list/:StuId',async(req,res)=>{
    let data=await student.updateOne(
        req.params,
        {
            $set:req.body
        }
    );
    res.send(data);
})

app.delete('/list/:StuId',async(req,res)=>{
    let data=await student.deleteOne(req.params);
    res.send(data);
})

app.listen(4000,()=>{
    console.log('server is running!');
})
