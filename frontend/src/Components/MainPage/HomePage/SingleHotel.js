import axios from 'axios';
import React, { useEffect, useState } from 'react'

import './SingleHotel.css'

const SingleHotel = ({ hotel }) => {
  // console.log(hotel)
  const [dish, setDish] = useState();
  const [selectedFood, setSelectedFood] = useState([{
    foodName: "",
    price: 0
  }]);


  const [totalPrice, setTotalPrice] = useState(0);
  const [hotelName, setHotelName] = useState();
  useEffect(() => {
    setDish(hotel.selected);

  }, [dish])

  const order = (price, foodName) => {
    setSelectedFood((previousSelected) => [...previousSelected, { price, foodName }]);
    setTotalPrice(totalPrice + price);
    setHotelName(hotel.hotelName)

    // console.log(dish)
  }
 


  const placeOrder = async () => {
    // console.log("singleHotel placeOrder:",dish)
    if (selectedFood.length > 1) {
      try {
        const doOrder = await axios.post("http://localhost:8000/foodorder", { hotelName, selectedFood, totalPrice });
        console.log("order sucessfully :", doOrder.data)
      }
      catch (err) {
        console.log("order is not post :", err)
      }
    }
    else {
      alert("select item first")
    }


    console.log(totalPrice)
    console.log(selectedFood)
  }

  return (
    <div >
   
      <div className="menu ">
        <h2 className='menu-title'>{hotel.hotelName}</h2>
        <h3>{hotel.type} foods</h3>
        <ul className="menu-list" >
          {
            hotel.selected.map((item, idx) => (
              <li onClick={() => {
                order(item.price, item.name)
            
              }}

             key={idx} >  {item.name}<span className="menu-price">{item.price} RS</span></li>
            ))
          }
        </ul>
        <button className='order-btn' onClick={placeOrder}>Order</button>

      </div>

    </div>


  )
}



export default SingleHotel;
