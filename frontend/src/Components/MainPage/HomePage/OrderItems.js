import React from 'react'
import './OrderItem.css'
const OrderItems = ({ foodItems, totalPrice ,hotelName}) => {
    console.log("OrderItem compo :", foodItems, totalPrice)
    return (
        <div>
            <div className='OrderList'>
                <h2>Ordered Items :</h2>
                <hr></hr>
                {
                    foodItems.map((i,idx) => (
                        <h4 key={idx}>{i.foodName}</h4>
                    ))
                }
                <hr></hr>
                <h2>Total Price:{totalPrice}</h2><span>To:{hotelName}</span>
            </div>

        </div>
    )
}

export default OrderItems
