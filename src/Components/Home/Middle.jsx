import './Middle.css';
import { HiOutlineMail } from "react-icons/hi";

const Middle =()=>{

    const middleStyle = {
        fontFamily: "'Courier New', Courier, monospace",
        fontSize: '25px',
        fontWeight: 'bold',
        color: 'black'
    };

    return(
        <div className="middle">
            <span style={{ fontSize: '18px', fontWeight: 'bold', color: 'gray' }}>Welcome</span><br/>
                <span style={middleStyle}>INFINITIO DIGITAL</span><br/>
              <span style={{padding:'10px',fontSize:'15px'}}><HiOutlineMail className='mail-img'/>
              supportuser@gmail.com</span>
            
        </div>
    )


}

export default Middle;