import express from "express"
const app = express()
import mongoose from "mongoose";

mongoose.connect('mongodb+srv://becode_21:Mongodb.Becode_21@cluster0.76tefbp.mongodb.net/?retryWrites=true&w=majority', {
useNewUrlParser: true,
useUnifiedTopology: true
}).then(() => {
console.log('MongoDB Atlas connected!');
}).catch(err => {
console.log(err);
});





app.listen(3000, () => console.log("Listen on port 3000"))


























//////// 
/*
npm init -y
npm install express
npm install --save-dev nodemon
npm install mongoose
npm install mongodb
*/