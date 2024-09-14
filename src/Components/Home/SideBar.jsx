"use client";

import React from 'react';
import Dropdown from 'react-dropdown';
import { Sidebar } from "flowbite-react";
import { LuAlignJustify } from "react-icons/lu";
import  { useState,useEffect } from "react";

import './SideBar.css'; 
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { HiOutlineDocument } from "react-icons/hi2";
import { RxTextAlignJustify } from "react-icons/rx";


const SideBar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [admin,setadmin] = useState(true);
  const [selectedCity, setSelectedCity] = useState(null);
    const Report = ['User Access Log'];
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentDate(new Date());
      }, 1000); // Update every second
    
      return () => clearInterval(intervalId);   
    
    }, []);

  return (
    <div className="sidebar">
            <p className='side-bar-text'>
            <b>Branch Name :</b> sangli<br/>
            <b>User Name :</b> Infinitio Digital<br/>
            <b>Date :</b> {currentDate.toLocaleDateString()}
            </p>
            <div className='dashboard'>
              <div className='dash-container'>
              <MdOutlineSignalCellularAlt className='dash-img'/>
              <a className="sidebar-title" href='/'> Dashboard</a>
      </div>
      { admin === false ?
      <ul className="sidebar-menu">
        <li>
        <HiOutlineDocument />
        <a href="/pan">Pan Verification</a></li>
        <li>
        <HiOutlineDocument />
          <a href="/aadhar">Aadhar Verification</a></li>
        <li>
        <HiOutlineDocument />
          <a href="/pass-port">Passport Verification</a></li>
        <li>
        <HiOutlineDocument />
          <a href="/voter">Voter ID Verification</a></li>
        <li>
        <HiOutlineDocument />
          <a href="/dl">DL Verification</a></li>
        <li>
        <HiOutlineDocument />
          <a className='end-li'href="/electricity"> Electricity Verification</a></li>

      </ul>
:
<div className='admin-side'>
<Sidebar className='admin-side-bar'>
<Sidebar.Items >
  <Sidebar.ItemGroup className='item-groups'>
    <Sidebar.Collapse className='sidebar-text' icon={LuAlignJustify} label="Master">
      <Sidebar.Item className='Item' href="/manage_branch">Manage Branch</Sidebar.Item>
    </Sidebar.Collapse>
  </Sidebar.ItemGroup>
</Sidebar.Items>
<Sidebar.Items >
  <Sidebar.ItemGroup className='item-groups'>
    <Sidebar.Collapse className='sidebar-text'icon={LuAlignJustify} label="User-Access">
      <Sidebar.Item className='Item' href="/manage_user">Manage Users</Sidebar.Item>
    </Sidebar.Collapse>
  </Sidebar.ItemGroup>
</Sidebar.Items>
<Sidebar.Items >
  <Sidebar.ItemGroup className='item-groups'>
    <Sidebar.Collapse className='sidebar-text'icon={LuAlignJustify} label="Reports">
      <Sidebar.Item className='Item' href="/user_access_log">User Access Log</Sidebar.Item>
      <Sidebar.Item className='Item' href="#">User Activity Log</Sidebar.Item>
      <Sidebar.Item className='Item' href="/branch_wise_summary">Branch Wise Summary</Sidebar.Item>
      <Sidebar.Item className='Item' href="/branch_wise_detailed">Branch Wise Detailed</Sidebar.Item>
    </Sidebar.Collapse>
  </Sidebar.ItemGroup>
</Sidebar.Items>
</Sidebar>
</div>
            }
            { admin === false ?
      <div className="dropdown">
      
      <RxTextAlignJustify className='drop-down-img' />

            <Dropdown value={selectedCity}  options={Report}  
                placeholder="Reports" className="drop" />
        </div>
              
              :
              <div> </div>
              }
    </div>
    </div>
  );
};

export default SideBar;
