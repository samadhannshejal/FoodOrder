const moongoose=require('mongoose');
moongoose.set('strictQuery',true)
moongoose.connect('mongodb://0.0.0.0:27017/FoodOrder',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
 console.log("DB connected sucessfully")
}).catch(()=>{
    console.log("Failed to connect DB")
})