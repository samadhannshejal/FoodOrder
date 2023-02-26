import axios from 'axios';
import React, { useState } from 'react'
import './RenderDelet.css';
const RenderDelet = ({ hotelName, type, foodItems ,id,remove}) => {
    // console.log("RenderDelet compo :", foodItems)
    // const [foodItems, setfoodItems] = useState([]);
    const removeData=async()=>{
        // console.log(id)
        remove(id)
        // console.log("sucessfully removed")
              
    }
    return (
        <div>
            <div className='box'>
                <h2>{hotelName}</h2>
                <h3>{type}</h3>
                <div className='food-items'>
                    {foodItems.map((item) => (
                        <div className='food-item' key={item.name}>
                            <p className='food-item-name'>{item.name}</p>
                            <p className='food-item-price'>{item.price} RS</p>
                        </div>
                    ))}
                      <button className='btn' onClick={()=>removeData()}>Remove</button>
                </div>
            </div>




        </div>
    )
}

export default RenderDelet
