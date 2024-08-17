import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import logo from '/src/assets/logo.png'; 

function Navbard() {
  return (
    <nav className="navbard">
      <div className="navbard-left">
        <button className="btn-search">
            <MagnifyingGlassIcon className="icon" />
        </button>
      </div>
      <div className="navbard-title">
        <img src={logo} alt="El Tiempo" className="img" />
      </div>
    </nav>
  );
}

export default Navbard;