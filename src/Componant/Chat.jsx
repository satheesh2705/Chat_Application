import React from 'react'
// import Profile from '../Assets/dhanush.jpeg'
import { GoDotFill } from "react-icons/go";
import { IoCall } from "react-icons/io5";
import { TbSend } from "react-icons/tb";
import { FaLink } from "react-icons/fa6";
import ReceivingMessage from './ReceivingMessage';
import SendingMessage from './SendingMessage';

const Chat = ({senderMessage, setSenderMessage, 
               receiveMessage, setReceiveMessage,
               handleSendMessage,getSendMessage, setGetSendMessage}) => {
  return (
    <div className='Chat'>
      <div className='Chat-Header'>
        <div className='Chat-HeadRight'>
          <div className='Chat-Profile'>
           {/* profile image */}
          </div>
          <div className='Chat-Head'>
            <h3>Fernandace</h3>
            <div><GoDotFill id='Online'/> Hello bruh!</div>
          </div>
        </div>
        <div className='Chat-HeadLeft' >
        <IoCall id='Call'/>
         <p>Call</p>
        </div>
      </div>

{/* for message send and receive */}
   
      <div className='Chat-Box'>
        {/* sender message  component \/  */}
        <>
          {
            senderMessage.length ?(
                senderMessage.map((sendMsg) =>(
                  <SendingMessage sendMsg={sendMsg}/>
                )
              )
            ):(
              <p></p>
            ) 
          }
        </>

         {/* receiver message  */}
      <>
         {
          receiveMessage.length ? (
            receiveMessage.map((reMsg) =>(
                 <ReceivingMessage reMsg={reMsg}/>
              )
            )
          ):(
            <p></p>
          )
         }
      </>          


      </div>
      <div className='Message-Bar'>
        <span>
         <FaLink  id='Menu'/>
        </span>
        <div>
          
          <input 
          type='text' 
          placeholder='Type a message'
          value={getSendMessage}
          onChange={ e => setGetSendMessage(e.target.value)}
          />

          <span>
            <TbSend id='SendBtn'
            onClick={handleSendMessage}
            />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Chat
