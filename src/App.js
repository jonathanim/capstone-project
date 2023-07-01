import React from 'react';
import Home from './routes/Home';
import {Route, Routes} from "react-router-dom";
import './App.css';
import Nav from './components/Nav';

import ReservationPage from './routes/ReservationPage';
import About from './routes/About';
import Login from './routes/Login';
import OrderOnline from './routes/OrderOnline';
import Menu from './routes/Menu';



function App() {
  return (
    <div className='App-container'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/reservation' element={<ReservationPage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/order' element={<OrderOnline/>}/>
      </Routes>
    </div>
  );
}

export default App;
