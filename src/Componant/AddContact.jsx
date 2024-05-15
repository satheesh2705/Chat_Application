// import React, { useRef } from 'react'
import { FaCamera } from "react-icons/fa";
const AddContact = ({handleSavaContact,contactName,       
                      setContactName,contactNumber,
                      setContactNumber,
                    selectImage, setSelectImage
                    }) => {

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSavaContact}>

          <div className="InputContainer"> 
            <div className="selectImg">
                <FaCamera id="slctImg"/>
                <input 
                type="file" 
                value={selectImage}
                onChange={(e) => setSelectImage(e.target.value)}
                />
            </div>
            <div className="NumName">
              <input 
              type="text" 
              placeholder="Enter the Contact Name" 
              value={contactName} 
              onChange={(e)=>setContactName(e.target.value)}/>
              <input 
              type="number" 
              placeholder="Enter the Contacr Number" 
              value={contactNumber} 
              onChange={(e)=>setContactNumber(e.target.value)}/>
            </div>
          </div>

          <div className='saveBtn'>
            <button type="submit">Save</button>
          </div>
      </form>
    </div>
  )
}

export default AddContact
