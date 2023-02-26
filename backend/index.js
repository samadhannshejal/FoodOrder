const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('./FoodOrder/Connection');

const userlogin = require('./FoodOrder/LoginSchema')
const Restaurant = require('./FoodOrder/RestraSchema');
const FoodOrder = require('./FoodOrder/FoodOrderSchema');
const { json } = require('body-parser');


app.use(cors());
app.use(bodyParser.json());

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    console.log(req.body)
    userlogin.findOne({ email: email }, (err, user) => {
        console.log(user);
        console.log(userlogin)
        if (user) {
            if (password == user.password) {
                res.send({ message: "login sucessful", user })

            }
            else {
                res.send({ message: "password didnt match" })
            }
        }
        else {
            res.send({ message: "user not found" })
        }
    })
})
app.post('/register', (req, res) => {
    const { name, email, password } = req.body
    console.log(req.body)
    userlogin.findOne({ email: email }, (err, data) => {
        if (data) {
            res.send({ message: "user is already registred" })
        } else {
            const data = new userlogin({
                name,
                email,
                password
            });
            data.save(err => {
                if (err) {
                    res.send(err)
                }
                else {
                    res.send({ message: "data register sucessfully" })
                }
            })
        }
    })

})
//////////////////////////////////////////////////////////////////////////////
app.post('/restra', (req, res) => {
    // const { type, hotelName, selected } = req.body;
    const info = req.body;
    const data = new Restaurant(info)
    data.save().then(respon => res.send(respon)).catch(err => res.send(err))
});
app.get('/restra', async (req, res) => {
    const find = await Restaurant.find();
    const data = JSON.stringify(find)
    //   console.log(find)
    if (data) {
        res.send(find);
    }
    else {
        res.statusCode(404).send("not found")
    }
});
////////////////////////////////////////////////////////////////////////////////////
app.post('/foodorder', (req, res) => {
    const foodData = new FoodOrder(req.body);
    console.log("post api :",foodData)
    foodData.save().then(response => response.send("order get:", response)).catch(err => res.send(err))
     console.log(req.body)
});
app.get('/foodorder',async(req,res)=>{
          const orderData=   await FoodOrder.find();
          const  data= JSON.stringify(orderData);
        console.log("from get api :",data)
          if(data){
            res.send(orderData);
          }
          else{
            res.send("Orders are not found")
          }
        //    console.log(orderData)
})
/////////////////////////////////////////////////////////////////////////////////////

app.delete('/restra/:id',async(req,res)=>{
    try{
        const deleteItem= await Restaurant.findByIdAndDelete(req.params.id);
        console.log(deleteItem)
    }
    catch(err){
  console.log(err)
    }
  

})


const port = 8000;



app.listen(port, () => console.log(`Application running on port :${port}`))