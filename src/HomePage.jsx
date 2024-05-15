import  Nav  from '../src/Componant/Nav'
import Contact from './Componant/Contact'
import Chat from './Componant/Chat'
import './App.css';

const HomePage = ({ contactList , setContactList, serchValue,
                    setSearchValue, senderMessage, setSenderMessage,
                    receiveMessage, setReceiveMessage, handleSendMessage,
                    getSendMessage, setGetSendMessage
                  }) => {
  
  return (
    <div className="HomePage">

        <Nav />
        <Contact 
        contactList={contactList}
        setContactList={setContactList}
        serchValue={serchValue}
        setSearchValue={setSearchValue}
        
        
        />
        <Chat 
        senderMessage={senderMessage}
        setSenderMessage={setSenderMessage}
        receiveMessage={receiveMessage}
        setReceiveMessage={setReceiveMessage}
        handleSendMessage={handleSendMessage}
        getSendMessage={getSendMessage}
        setGetSendMessage={setGetSendMessage}
        />
        
    </div>
  )
}

export default HomePage
