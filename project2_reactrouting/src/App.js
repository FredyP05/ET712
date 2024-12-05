import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import routing files
import Home from './components/button1'
import About from './components/button2'
import Contact from './components/button3'
import Button4 from './components/button4'
import Navbars from './components/navbars'

function App() {
  return (
    <>
      <h1 className='title'>Project 2 by Fredy Perez Vicente</h1>

      <BrowserRouter>
        <Navbars/>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/button4' element={<Button4 />} />
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
