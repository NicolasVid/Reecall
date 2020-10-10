import React from 'react';

import ChatMessages from './ChatMessages';
import ChatInput from './ChatInupt';
import ChatHeader from './ChatHeader';

import './chat.scss';

const Chat = () => (
  <div className="chat">
    <ChatHeader />
    <ChatMessages />
    <ChatInput />

  </div>
);

export default Chat;
