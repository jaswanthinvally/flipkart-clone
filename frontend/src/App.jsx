import React from 'react';
import './App.css'; 

import Home from './pages/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Additems from './pages/Additems';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/additem' element={<Additems/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
