import './App.css';

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
      </Routes>
    </div>
  );
}

export default App;
