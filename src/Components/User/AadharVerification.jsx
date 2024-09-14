import React, { useState } from 'react';
import Nav from '../Home/Nav';
import SideBar from '../Home/SideBar';
import './AadharVerification.css';
import Footers from '../Home/footer';
const AadharVerification = () => {
  const [pan, setPan] = useState('');

  // Handler for input change
  const handlePanChange = (event) => {
    const value = event.target.value;
    // Allow only alphanumeric characters
    if (/^[a-zA-Z0-9]*$/.test(value)) {
      setPan(value);
    }
  };

  const handleVerify = () => {
    // Handle verification logic here
    alert(`Verifying PAN: ${pan}`);
  };

  return (
    <>
    <Nav/>
    <SideBar/>
    <div className="container">
      <h2 className="title">Aadhar Verification</h2>
      <label className="pan-text"for="pan-input">Enter Aadhar Number</label>
      <input
      id='pan-input'
        type="text"
        value={pan}
        onChange={handlePanChange}
        placeholder="ABCDE1234F"
        className="inputField"
      />
      <button onClick={handleVerify} className="verifyButton">
        Send Otp
      </button>
    </div>
    <div className='footer'><Footers/></div>
    
    </>
  );
};

export default AadharVerification;
