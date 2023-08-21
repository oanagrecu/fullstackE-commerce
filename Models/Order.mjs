
import mongoose from "mongoose";

const ordersSchema = new mongoose.Schema({
    //playerId: {
    //  type: String,
    //  required: true,
    //},
    //name: {
    //  type: String,
    //  required: true,
    //},
    //nationality: {
    //  type: String,
    //  required: true,
    //},
    //club: {
    //  type: String,
    //  required: true,
    //},
    //overallRating: {
    //  type: String,
    //  required: true,
    //},
    //playerImg : {
    //  type : String,
    //  //required : true
    //},
    //clubImg : {
    //  type : String,
    //  //required : true
    //},
  })
  
  const Order = mongoose.model("orders", ordersSchema)
  
  export default Order