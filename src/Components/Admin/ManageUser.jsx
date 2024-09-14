import React from 'react'
import Nav from '../Home/Nav';
import SideBar from '../Home/SideBar';
import Footers from '../Home/footer';

const ManageUser = () => {
  const footStyle = {
    marginTop:"36%"
  };

  return (
    <>
    <Nav/>
    <SideBar/>
    <div style={{textAlign:'center', fontSize:'30px'}}>Manage User</div>
    <div style={footStyle}><Footers/></div>
    </>
  )
}

export default ManageUser;