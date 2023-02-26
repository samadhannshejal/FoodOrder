
import './App.css';
import Front from './Components/FrontPage/Front';
import LoginPage from './Components/LoginPage/LoginPage';
import RegisterPage from './Components/Register/RegisterPage';
import { BrowserRouter, Routes, Route, Navigate, Router } from "react-router-dom";
import Main from './Components/MainPage/Main';
import Restra from './Components/MainPage/HomePage/Restra';
import Order from './Components/MainPage/HomePage/Order';
import AllRestra from './Components/MainPage/HomePage/AllRestra';
import { useState } from 'react';


function App() {
  const [user, setLoginUser] = useState({})

  return (
    <div >

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Front />} />

          <Route path='/login' element={<LoginPage />} />

          <Route path='/register' element={<RegisterPage />} />
          <Route path='/main' element={<Main />}>
            <Route path='restra' element={<Restra />} />
            <Route path='order' element={<Order />} />
            <Route path='allRestra' element={<AllRestra />} />
          </Route>
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
