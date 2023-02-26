
import "./LoginPage.css"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const LoginPage = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: "",
    password: "",
  })
  
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    })
  };
  const login = async () => {
    if(!user.email|| !user.password){
      alert("please fill all field")
      return
    }
    try {
      const responce = await axios.post("http://localhost:8000/login", user)
      
      // alert(responce)
      console.log("respose from backend loginPage",responce.data)
      if(responce.data.message==="password didnt match"){
        alert('password didnt match')
        return;
      }
      // navigate("/AppNavigation")
      navigate("/main")
      // if(isAuthenticated){
      //   navigate('/main')
      // }
     
  
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className='MainLogin'>
      <div className='login'>
        <input type="text" placeholder='Enter your Email address' name='email' value={user.email} onChange={handleChange} />
        <input type="password" placeholder='Enter your password' name='password' value={user.password} onChange={handleChange} />
        <button className='button' onClick={login}>Login</button>
        <div>OR</div>
        <button className='button' onClick={() => navigate('/register')}>Register</button>
      </div>
    </div>
  )
}

export default LoginPage
