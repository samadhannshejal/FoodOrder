import axios from 'axios'

import React, { useEffect, useState } from 'react'
import OrderItems from './OrderItems';
import './OrderItem.css'
import './View.css'
const ViewOrder = () => {
  const [orderData, setOrderData] = useState([]);

  const view = async () => {
    try {
      const order = await axios.get("http://localhost:8000/foodorder");
      setOrderData(order.data);
      console.log("data from view order", orderData)
      // console.log("data from view order",order.data)
    } catch (err) {
      console.log("view order failed", err)
    }
    // console.log("data from view order", orderData)
  }

  return (
    <div>
      <button onClick={view}>view Order</button>
      <div className='View'>
        {

          orderData.map((i, idx) => (
            // OrderItems foodItems={i.selectedFood  } totalPrice={i.totalPrice}
            <OrderItems foodItems={i.selectedFood} totalPrice={i.totalPrice} hotelName={i.hotelName} key={idx}/>



          ))
        }
      </div>

      
    </div>
  )
}

export default ViewOrder
