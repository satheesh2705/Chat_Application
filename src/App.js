// import React, { useEffect } from 'react'
import AddContact from '../src/Componant/AddContact.jsx';
import HomePage from './HomePage.jsx';
import {Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {ajith} from './Assets/ajith.jpeg';



const App = () => {
  const navigate = useNavigate()

  const [senderMessage, setSenderMessage] = useState([
    {
       message:"This is satheesh",   
    },
    {
      message:" from kallai",   
    },
    {
     message:" 6383591766  "
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
      message:" mr_black",
    },
    {
      message:"mrsatheesh2705@gmail.com",   
   },
   {
      message:"ok, message me",   
  }
  ])



  const [contactList, setContactList] = useState([
    {
      id:1,
      name:"SATHEESH",
      number:6383591766,
      img:"{ajith}",
      desc:"Hi Hello"
    },
    {
      id:2,
      name:"Maithen",
      number:6383591766,
      img:"",
      desc:"Hi boys"
    },
    {
      id:3,
      name:"rahul v",
      number:6383591766,
      img:"",
      desc:"Hi girls"
    }
  ])

  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const  [selectImage, setSelectImage] = useState('');
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
          selectImage={selectImage}
          setSelectImage={setSelectImage}
       />} />
     </Routes>
     
     
  </div>
  )
}

export default App
