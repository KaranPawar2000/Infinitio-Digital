import React, { useState } from 'react';
import './Panverification.css'; // Import the CSS file
import Nav from '../Home/Nav';
import SideBar from '../Home/SideBar';
import './VoterIdVerification.css';
import Footers from '../Home/footer';

const VoterIdVerification = () => {
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
      <h2 className="title">Voter Id Verification</h2>
      <label className="pan-text"for="pan-input">Card Number</label>
      <input
      id='pan-input'
        type="text"
        value={pan}
        onChange={handlePanChange}
        placeholder="ABCDE1234F"
        className="inputField"
      />
      <button onClick={handleVerify} className="verifyButton">
        Validate
      </button>
    </div>
    <Footers/>
    </>
  );
};

export default VoterIdVerification;
