import React from 'react'
// import Profile from '../Assets/dhanush.jpeg';
import { IoIosArrowForward } from "react-icons/io";

const SeperateContant = ({ contact}) => {
  return (
    <div className='Seperate-Contact'>
        <div className="Contact-Detail-Left">
          <div className='Profile-Img'>
            {/* profile image */}
            <img src={contact.img} alt="" />
          </div>
            <div className='Contact-Detail'>
                <h3>{contact.name}</h3>
                <p>{contact.desc}</p>
                <span> 12.00 AM</span>                
            </div>
        </div>
        <IoIosArrowForward id='Open-Chat' />
        
     </div>
  )
}

export default SeperateContant
