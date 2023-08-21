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

import { MongoClient } from "mongodb";
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = `mongodb+srv://${username_mongo}:${password_mongo}@eshop.yo4pqlj.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(url);
 
 // The database to use
 const dbName = "eshop";
             
 async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db(dbName);

         // Use the collection "users"
        const col1 = db.collection("users");

        // Construct a document                                                                                                                                                              
        //  let personDocument = {
        //      "name": { "first": "Alan", "last": "Turing" },
        //      "birth": new Date(1912, 5, 23), // May 23, 1912                                                                                                                                 
        //      "death": new Date(1954, 5, 7),  // May 7, 1954                                                                                                                                  
        //      "contribs": [ "Turing machine", "Turing test", "Turingery" ],
        //      "views": 1250000
        //  }
        
        // construct documents for admins
        const admins = [
            {
            "username": "Alizée",
            "email": "Alizée@gmail.com",
            "password": "1234"
            },
            {
            "username": "Raad",
            "email": "Raad@gmail.com",
            "password": "12345"
            },
            {
            "username": "Oana",
            "email": "Oana@gmail.com",
            "password": "123456"
            },
            {
            "username": "Girishaka",
            "email": "Girishaka@gmail.com",
            "password": "123457"
            }
        ];
  
        // Insert multiple admin documents in one operation
        const a = await col1.insertMany(admins);

        console.log("Inserted documents:", a.insertedCount);

        // Find all documents
        const cursor = col1.find({});

        await cursor.forEach(document => {
            console.log("Found document:", document);
        });


        /*-------------------------------------------COLLECTION PRODUCTS--------------------------------------*/

    //    // Use the collection "products"
    //    const col2 = db.collection("products");

    //    // Construct a document
    //   let product1 = {
    //    "reference": "Harnais",
    //    "description" : "Pour le cou",
    //    "prix" : "12€"
    //    }

    //    // Insert a product document, wait for promise so we can read it back
    //    const p = await col1.insertOne(product1);

    //    // Find one document
    //    const myDoc1 = await col2.findOne();
    //    // Print to the console
    //    console.log(myDoc1);

    }

    catch (err) {
        console.log(err.stack);
    }
 
    finally {
        await client.close();
    }
}

run().catch(console.dir);






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