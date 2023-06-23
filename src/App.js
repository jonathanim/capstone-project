import React from 'react';
import Home from './routes/Home';
import Reservation from './components/Reservation';


import {Route, Routes} from "react-router-dom";

import './App.css';
import Nav from './components/Nav';

function App() {
  return (
    <div className='App-container'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/reservation' element={<Reservation/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
