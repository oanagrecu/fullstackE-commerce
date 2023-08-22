
import mongoose from "mongoose";
//export const profilePictureBasePath = "uploads/playersPictures" //inside public folder => utilisé si les pictures sont stockées en local pour être injectées à la db

const productsSchema = new mongoose.Schema({
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
  
  const Product = mongoose.model("products", productsSchema)
  
  export default Product