import React from 'react' 
import { IoPersonAddSharp } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import SeperateContant from './SeperateContant';
import {Link} from 'react-router-dom'


const Contact = ({contactList, searchValue,     
                  setSearchValue
                }) => {
  return (

    <div className='Contact'>  
      <div className='Contact-Head'>
        <div className='Contact-Left'>
          <p>Message</p>
          <FaChevronDown />
          <p>{contactList.length}</p>
        </div>
        <div className='Contact-Right'>
          <p> 
            <Link to="addAccount">
           <IoPersonAddSharp  
             id='AddContact'/>
           </Link>              
        
          </p>
        </div>
      </div>

      <div className='Search-Box'>

        <input 
        type='text' 
        placeholder='Search Your Buddy' 
        className='searchBar'
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        />
        <FaSearch />
      </div>

      <div className='SPC'>
        {
          contactList.length ?(
            contactList.map((contact) =>(
              <SeperateContant  contact={contact} key={contact.id}/>
            ))
          
          ):
          <p>Sorry you don't have any contact</p>
        }
      </div>

    </div>
  )
}

export default Contact
