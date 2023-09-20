
const mongoose=require('mongoose');
const myschema=mongoose.Schema({
    StuId:Number,
    Name:String,
    Age:Number,
    Course:String,
    Email:String,
    password:String
});
module.exports=mongoose.model('Infos',myschema);

const mynew=mongoose.Schema({
    Email:String,
    password:String
});
module.exports=mongoose.model('Admin',mynew);


