import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import routing files
import Button1 from './components/button1'
import Button2 from './components/button2'
import Button3 from './components/button3'
import Button4 from './components/button4'
import Navbars from './components/navbars'

function App() {
  return (
    <>
      <h1 className='title'>Smartphones by Fredy Perez Vicente</h1>
      <BrowserRouter>
        <Navbars/>
        <Routes>
            <Route path='/' element={<Button1/>} />
            <Route path='/button2' element={<Button2/>} />
            <Route path='/button3' element={<Button3/>} />
            <Route path='/button4' element={<Button4/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
