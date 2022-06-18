import React from "react";

// import picture
import logo from '../logo.svg';
import pict from '../Asset/5618169.jpg';

// import component
import Login from '../components/Login.js';

// css file
import '../css/login.css';

const from_login = () => {
    return (
        <div>
            <nav className='navbar'>
                <div className='kotak'>
                    <img src={logo} alt="Logo Aplikasi"></img>
                </div>
                <button className='btn-home-login'>Home</button>
            </nav>
            <div className='container'>
                <div className='gambar-login'>
                    <img src={pict} alt="Gambar Konten"></img>
                </div>
                <div className='form-login'>
                    <Login />
                </div>
            </div>
        </div>
    )
}

export default from_login;