import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./Restra.css"

const Restra = () => {
  const Maharastrian = [
    { name: "vada pav", price: 10 },
    { name: "pav baji", price: 24 },
    { name: "mirchu", price: 3 },
    { name: "gulabjam", price: 5 },
    { name: "barli wangi", price: 15 },
    { name: "pohe", price: 10 },
    { name: "pooran poli", price: 13 },
    { name: "misal pav", price: 30 }
  ];

  const Gujarati = [
    { name: "Thepla", price: 5 },
    { name: "Jalebi Fafda", price: 8 },
    { name: "Khichu", price: 6 },
    { name: "Handavo", price: 7 },
    { name: "Dabeli", price: 10 },
    { name: "Khakhra", price: 4 },
    { name: "Ganthiya", price: 9 },
    { name: "Patra", price: 6 }
  ];

  const Punjabi = [
    { name: "Chhole-Bhature", price: 12 },
    { name: "Tandoori Chicken", price: 15 },
    { name: "Pinni", price: 8 },
    { name: "Lassi", price: 6 },
    { name: "Butter Chicken", price: 18 },
    { name: "Tandoori", price: 14 },
    { name: "Masala Channa", price: 10 },
    { name: "Dal Makhani", price: 13 }
  ];

  const South = [
    { name: "Idlis", price: 5 },
    { name: "Uttapams", price: 8 },
    { name: "Kaapi", price: 4 },
    { name: "Vadas", price: 6 },
    { name: "Dosas", price: 10 },
    { name: "Appams and Ishtu", price: 12 },
    { name: "Kaapi: Filter Coffee", price: 4 },
    { name: "Biryani", price: 15 }
  ];

  const Chinese = [
    { name: "Dumplings", price: 12 },
    { name: "Peking Duck", price: 25 },
    { name: "Wonton Soup", price: 8 },
    { name: "Scallion Pancakes", price: 10 },
    { name: "Chow Mein", price: 14 },
    { name: "Sweet and Sour Pork", price: 18 },
    { name: "Spring Rolls", price: 9 },
    { name: "Fried Rice", price: 12 }
  ];
  const [type, setType] = useState("");
  const [hotelName, setHotelName] = useState("")
  const [selected, setSelected] = useState([]);

  var handleChange = (e) => {
    const hotelName = e.target.value;
    setHotelName(hotelName);
  }

  var handleChange2 = (e) => {
    const type = e.target.value;
    setType(type);
  }

  var cheackHandle = (e) => {
    const { name, checked, value } = e.target;
    console.log(name, checked, value);
    const item = {
      name: name,
      price: value,
    }
    if (checked) {
      setSelected([...selected, item])
    }
    else {
      setSelected(selected.filter(i => i.name !== i.name))
    }

  }

  useEffect(() => {
  }, [type])

  let arry = []

  if (type === "Gujarati") {
    arry = Gujarati;
  }
  else if (type === "Punjabi") {
    arry = Punjabi;
  }
  else if (type === "Maharastrian") {
    arry = Maharastrian;
  }
  else if (type === "South indian") {
    arry = South;
  }
  else if (type === "Chinese") {
    arry = Chinese;
  } else {
    arry = []
  }

  const submit = async () => {
    try {
      const response = await axios.post("http://localhost:8000/restra", { type, hotelName, selected });
      console.log(response.data)
    } catch (err) {
      console.log(err)
    }

  }
  return (
    <div className='paraent'>
     <h2>------------------------------Register Your own Restaurant-------------------------------</h2>
      <div className='main-restra'>
      
        <div className='create-restra'>
          <input type="text" placeholder='Enter name of Restaurant' name='hotel' onChange={handleChange} />
          <br></br>
          <select onChange={handleChange2}>
            <option value={"Select any food type .."} >Select any food type ..</option>
            <option value={"Maharastrian"}>Maharastrian</option>
            <option value={"Gujarati"}>Gujarati</option>
            <option value={"Punjabi"}>Punjabi</option>
            <option value={"South indian"}>South indian</option>
            <option value={"Chinese"}>Chinese</option>
          </select><br></br>
        </div>
        <div className='output'>
          <h2>List of Food items :</h2>
          {arry.map((ele, idx) => (
            <div key={idx} className="checkbox-container">
              <label>
                <input type="checkbox" name={ele.name} value={ele.price} onChange={cheackHandle} />
                <span className="name">{ele.name}</span>----
                <span className="price">{ele.price} RS</span>
              </label>
            </div>
          ))}

        </div>
        <button className='submit' onClick={submit}>Submit</button>
      </div>
    </div>
  )
}

export default Restra
