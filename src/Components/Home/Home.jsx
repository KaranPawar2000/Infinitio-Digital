import Middle from "./Middle";
import Nav from "./Nav"
import SideBar from "./SideBar";
import Footers from "./footer";


let Home =()=>{
    const footStyle = {
        marginTop:"28%"
      };
    return(
    <>
    <Nav/>
    <SideBar/>
    <Middle/>
    <div style={footStyle}><Footers/></div>
    </>
    )
}

export default Home;