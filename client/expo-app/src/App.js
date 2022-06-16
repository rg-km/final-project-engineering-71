import Card from './components/Card';
import './App.css';
import './index.css';
import React from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import FormRegis from './Pages/Form_Regis';

function App() {
  return (
    <div className="App">
      <Card />
      <Navbar />;
      <FormRegis />
    </div>
  );
}

export default App;
