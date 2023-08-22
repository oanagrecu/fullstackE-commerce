import dotenv from "dotenv"
dotenv.config()
import { MongoClient } from "mongodb";

const username_mongo = process.env.username_mongo
const password_mongo = process.env.mongo_password
 
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
        const col = db.collection("users");
        
        // construct documents for admins
        const admins = [
            {
            "username": "test3",
            "email": "Alizée@gmail.com",
            "password": "1234"
            },
            {
            "username": "test4",
            "email": "Raad@gmail.com",
            "password": "12345"
            },
            {
            "username": "test5",
            "email": "Oana@gmail.com",
            "password": "123456"
            },
            {
            "username": "test6",
            "email": "Girishaka@gmail.com",
            "password": "123457"
            }
        ];
  
        // Insert multiple admin documents in one operation
        const insertResult = await col.insertMany(admins);

        console.log("Inserted documents:", insertResult.insertedCount);

        // Find all documents
        const cursor = col.find({});

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