import React, { useState } from 'react';
import Nav from '../Home/Nav';
import SideBar from '../Home/SideBar';
import './PassportVerification.css'
import Footers from '../Home/footer';

const PassportVerification = () => {
  const [pan, setPan] = useState('');
  const [dob, setDob] = useState(''); // New state for date of birth

  // Handler for input change
  const handlePanChange = (event) => {
    const value = event.target.value;
    // Allow only alphanumeric characters
    if (/^[a-zA-Z0-9]*$/.test(value)) {
      setPan(value);
    }
  };

  const handleDobChange = (event) => {
    setDob(event.target.value);
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
      <h2 className="title">Passport Verification</h2>
      <div className='inputs'>
      <label className="pan-text"for="pan-input">Passport File No.</label>
      <input
      id='pan-input'
        type="text"
        value={pan}
        onChange={handlePanChange}
        placeholder="ABCDE1234F"
        className="inputField"
      />
         <label className="dob-text" htmlFor="dob-input">Date of Birth</label>
          <input
            id="dob-input"
            type="date"
            value={dob}
            onChange={handleDobChange}
            className="inputField"
          />
          </div>
      <button onClick={handleVerify} className="verifyButton">
        Validate
      </button>
    </div>
    <Footers/>
    </>
  );
};

export default PassportVerification;
