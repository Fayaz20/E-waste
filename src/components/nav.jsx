import React from 'react';
import './nav.css';

function Navbar({scrollToSection0,scrollToSection1,scrollToSection2}) {
  return (
    <nav className="navbar">
      <h1 style={{ color: 'white', fontFamily: 'sans-serif',fontSize:'30px',fontWeight:'bolder'}}>E-<span style={{color:'rgb(158, 88, 224)'
}}>Revive</span></h1>
      <ul className="nav-list">
      <li className="nav-item">
          <button onClick={scrollToSection0} style={{ color: 'white', fontFamily: 'sans-serif' }}>e-WASTE HUBS</button>
        </li>
        <li className="nav-item">
          <button onClick={scrollToSection1} style={{ color: 'white', fontFamily: 'sans-serif'}}>EXPLORE ABOUT E-WASTE</button>
        </li>
        <li className="nav-item">
          <button  onClick={scrollToSection2} style={{ color: 'white', fontFamily: 'sans-serif' }}>NOTIFY</button>
        </li>
        <li className="nav-item">
          <button style={{ color: 'white', fontFamily: 'sans-serif' }}>WALLET</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
