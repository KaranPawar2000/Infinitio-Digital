import React from 'react';
import './Nav.css';
import { CiSettings } from "react-icons/ci";
import { IoExitOutline } from "react-icons/io5";

const Nav = () => {
  return (
    <nav className="navbar">
        <img className="company-logo" src='http://adminkyc.infinitiodigital.com/auth/static/logo/logo.png'/>
      <h1 className="Company-name">Infinitio Digital</h1>
      <CiSettings className='setting-logo'/>
      <IoExitOutline className='logout-logo' />

    </nav>
  );
};

export default Nav;
