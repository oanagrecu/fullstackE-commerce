import express from "express"
const app = express()
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const username_mongo = process.env.username_mongo
const password_mongo = process.env.mongo_password
mongoose.connect(`mongodb+srv://${username_mongo}:${password_mongo}@eshop.yo4pqlj.mongodb.net/?retryWrites=true&w=majority`, {
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
npm i dotenv
*/