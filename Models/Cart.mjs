import mongoose from "mongoose"

const cartsSchema = new mongoose.Schema({
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

const Cart = mongoose.model("carts", cartsSchema)

export default Cart
