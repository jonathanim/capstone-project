import React from 'react';
import Home from './routes/Home';



import {Route, Routes} from "react-router-dom";


import Nav from './components/Nav';
import './App.css';
import ReservationPage from './routes/ReservationPage';
function App() {
  return (
    <div className='App-container'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/reservation' element={<ReservationPage/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
