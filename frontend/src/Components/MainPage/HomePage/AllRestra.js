import axios from 'axios';
import React, { useEffect, useState } from 'react'
import RenderDelet from './RenderDelet';
import './RenderDelet.css';
const AllRestra = () => {
  const [restra, setRestra] = useState([]);
  const getData = async () => {
    const wholeData = await axios.get("http://localhost:8000/restra");
    setRestra(wholeData.data);

  }
  const remove = async (id) => {
    try {
      axios.delete(`http://localhost:8000/restra/${id}`)
    
    } catch (err) {
      console.log(err)
    }

  }
  useEffect(() => {
    getData()

  }, [])
  useEffect(() => {
    getData()

  }, [restra])

  // console.log("All restra compo :-", restra)
  return (
    <div>
      <div className='gridAllRestra'>
        {
          restra.map((i, idx) => (
            <RenderDelet key={idx} hotelName={i.hotelName} type={i.type} foodItems={i.selected
            } id={i._id} remove={remove} />
          ))
        }
      </div>

    </div>
  )
}

export default AllRestra
