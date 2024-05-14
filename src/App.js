// import React, { useEffect } from 'react'
import AddContact from '../src/Componant/AddContact.jsx';
import HomePage from './HomePage.jsx';
import {Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';



const App = () => {
  const navigate = useNavigate()

  const [senderMessage, setSenderMessage] = useState([
    {
       message:"This is satheesh",   
    },
    {
      message:"ok, what are you doing",   
    },
    {
     message:" sorr i didn't understand "
    }
  ]);

  const [getSendMessage, setGetSendMessage] = useState('')

    const handleSendMessage = (e) => {
      console.log("hello");
      const id = senderMessage.length ? senderMessage[senderMessage.length-1].id+1:1;
      const NewMessage = {id, message:getSendMessage}
      const AllSendMessage = [...senderMessage, NewMessage]
      setSenderMessage(AllSendMessage);
      setGetSendMessage('');
      
    } 


  const [receiveMessage, setReceiveMessage] = useState([
    { 
      message:"This is Alpha",
    },
    {
      message:"This is satheesh",   
   },
   {
      message:"ok, what a lorem this udkkskn shsihus susu susfu sysfddsJ SAO OUOUDvO V re you doing",   
  }
  ])



  const [contactList, setContactList] = useState([
    {
      id:1,
      name:"SATHEESH",
      number:6383591766,
      desc:"Hi Hello"
    },
    {
      id:2,
      name:"Maithen",
      number:6383591766,
      desc:"Hi boys"
    },
    {
      id:3,
      name:"rahul v",
      number:6383591766,
      desc:"Hi girls"
    },
    {
      id:4,
      name:"kamesh",
      number:9871367367,
      desc:"Hi girls"
    },
    {
      id:5,
      name:"naay dady",
      number:611520104052,
      desc:"Hi girls"
    },
    {
      id:6,
      name:"markka ",
      number:9543527367,
      desc:"Hi girls"
    },
    {
      id:7,
      name:"santo ",
      number:9543527367,
      desc:"Hi girls"
    }
  ])

  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleSavaContact = (e) => {
      
      e.preventDefault();
       
      const id = contactList.length ? contactList[contactList.length-1].id+1 : 1;
      const newContactList  = {id,name:contactName,number:contactNumber,desc:"Hello !!.. "}
      const allContactList  =  [...contactList, newContactList];
      setContactList(allContactList);
      setContactName('');
      setContactNumber('');
      navigate('/')
    }

    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]) 

    // useEffect(()  =>{
    //   const filteredResult = contactList.filter((contact) =>
    //     ((contact.name).toLowerCase()).includes(searchValue.toLowerCase()) 
    //   );
    //   setSearchResults(filteredResult());
    // }, [contactList, searchValue])
  
  return(
  <div>
    
     <Routes>
      <Route path='/' 
      element={ <HomePage 
        contactList={contactList.filter((contactlist) => ((contactlist.name).toLowerCase()).includes(searchValue.toLowerCase())

        )}
        setContactList={setContactList}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        senderMessage={senderMessage}
        setSenderMessage={setSenderMessage}
        receiveMessage={receiveMessage}
        setReceiveMessage={setReceiveMessage}
        handleSendMessage={handleSendMessage}
        getSendMessage={getSendMessage}
        setGetSendMessage={setGetSendMessage}
        
      />} />

     <Route path='addAccount' 
      element={<AddContact 
          handleSavaContact={handleSavaContact}
          contactName={contactName}
          setContactName={setContactName}
          contactNumber={contactNumber}
          setContactNumber={setContactNumber}
       />} />
     </Routes>
     
     
  </div>
  )
}

export default App
