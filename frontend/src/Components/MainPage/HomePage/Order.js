import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SingleHotel from './SingleHotel';
import "./Order.css"
import ViewOrder from './ViewOrder';


const Order = () => {
  const [data, setData] = useState([]);
  const View = async () => {
    try {
      const res = await axios.get("http://localhost:8000/restra");
      if (res) {
        setData(res.data);
        console.log("data from order", data)
      }

    } catch (err) {
      console.log(err)

    }

  }
  useEffect(() => {
    View()
  }, [])

  return (
    <div>

      <ViewOrder />
      <h2>You can order your food from here from down</h2>
      {/* <button onClick={View}> Restaurants</button> */}
      <div className='grid' style={{ backgroundColor: 'gray' }}>
        {
          data.map((restaurantData, idx) =>

            (<SingleHotel key={restaurantData._id} hotel={restaurantData} />)
          )
        }
      </div>
    </div>
  )
}

export default Order
