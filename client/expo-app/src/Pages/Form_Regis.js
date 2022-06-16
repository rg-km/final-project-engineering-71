import React from 'react';

// import picture
import logo from '../logo.svg';
import pict from '../assets/2868886.jpg';
import RegisInput from '../components/Register'

// css file
import '../css/regis.css';

const from_regis = () => {
    return (
        <div>
            <nav className='navbar'>
                <div className='kotak'>
                    <img src={logo} alt="Logo Aplikasi"></img>
                </div>
                <button className='btn-home'>Home</button>
            </nav>
            <div className='container'>
                <div className='form-regis'>
                    <RegisInput />
                </div>
                <div className='gambar-konten'>
                    <img src={pict} alt="Gambar Konten"></img>
                </div>
            </div>
        </div>
)}

export default from_regis;
