import './App.css';
import './index.css';
import React from 'react';
import Card from './components/Card';
import Navbar from "./components/Navbar";
import FormRegis from './Pages/Form_Regis';
import Login from './Pages/Form_login';

// routes
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/regis' element={<FormRegis />}/>
        <Route path='/login' element={<Login />}/>
        {/* <Route path='/card' element={<Card />}/>
        <Route path='/navbar' element={<Navbar />}/> */}
      </Routes>
    </div>
  );
}

export default App;
