import React, { useState } from 'react';
import './Panverification.css'; // Import the CSS file
import Nav from '../Home/Nav';
import SideBar from '../Home/SideBar';
import './Electricity.css';
import Footers from '../Home/footer';

const Electricity = () => {
const style={
  width:'99%'
}

  const [pan, setPan] = useState('');
  const [provider, setProvider] = useState(''); // New state for electricity provider

  // Handler for input change
  const handlePanChange = (event) => {
    const value = event.target.value;
    // Allow only alphanumeric characters
    if (/^[a-zA-Z0-9]*$/.test(value)) {
      setPan(value);
    }
  };

  const handleProviderChange = (event) => {
    setProvider(event.target.value);
  };

  const handleVerify = () => {
    // Handle verification logic here
    alert(`Verifying PAN: ${pan}\nElectricity Provider: ${provider}`);
  };

  return (
    <>
      <Nav />
      <SideBar />
      <div className="container">
        <h2 className="title">Electricity Bill Verification</h2>
        <div className='inputs'>
          <div className="input-group">
            <label className="pan-text" htmlFor="pan-input">Consumer No.</label>
            <input
              id="pan-input"
              type="text"
              value={pan}
              onChange={handlePanChange}
              placeholder="ABCDE1234F"
              className="inputField"
            />
          </div>
          <div className="input-group">
            <label className="provider-text" htmlFor="provider-select">Electricity Provider</label>
            <select
              id="provider-select"
              value={provider}
              onChange={handleProviderChange}
              className="inputField"
              style={style}
            >
              <option value="" disabled>Select Provider</option>
              <option value="provider1">Provider 1</option>
              <option value="provider2">Provider 2</option>
              <option value="provider3">Provider 3</option>
              {/* Add more providers as needed */}
            </select>
          </div>
        </div>
        <button onClick={handleVerify} className="verifyButton">
          Validate
        </button>
      </div>
      <Footers/>
    </>
  );
};

export default Electricity;
