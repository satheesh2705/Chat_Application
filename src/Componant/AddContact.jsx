// import React, { useRef } from 'react'
// import { FaCamera } from "react-icons/fa";
const AddContact = ({handleSavaContact,contactName,setContactName,contactNumber,setContactNumber}) => {

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSavaContact}>
        <h2>Add Contact</h2>

        <div className="form-group">
          <input
            type="text"
            id="username"
            placeholder="Enter Your Friend Name"
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
            required
          />
        </div>
          
           <div className="form-group">         
           <input
            type="number"
            id="number"
            placeholder="Enter Your Friend Number"
            value={contactNumber}
            onChange={(e) => setContactNumber (e.target.value)}
            required
          />
        </div>
          <div className='saveBtn'>
          <button type="submit">Save</button>
          </div>
      </form>
    </div>
  )
}

export default AddContact
