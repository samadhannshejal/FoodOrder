const mongoose=require('mongoose');
const dishSchema = new mongoose.Schema({
    name: String,
    price: Number
  });
const RestaurantSchema= new mongoose.Schema({
    hotelName:String,
    type:String,
    selected: [dishSchema],
});

module.exports= mongoose.model("restra",RestaurantSchema)
