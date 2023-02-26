const mongoose=require('mongoose');
const foodItems=new mongoose.Schema({
    foodName:String,
    price:Number,
})
const FoodOrderSchema= new mongoose.Schema({
    hotelName:String,
    selectedFood:[foodItems],
    totalPrice:Number
});
module.exports=  mongoose.model("FoodOrder",FoodOrderSchema)