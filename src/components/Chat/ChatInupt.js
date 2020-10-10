import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faImages, faPaperclip, faSortDown,
} from '@fortawesome/free-solid-svg-icons';

const ChatInput = () => (
  <div className="chat-input">
    <div className="chat-input__value">We've all recieved those flashy marketing emails that catch our eye and
      encourage us to take action. They often follow all the rules for a successful
    </div>
    <div className="chat-input__footer">
      <h1>Subject: <span>Design Template <FontAwesomeIcon icon={faSortDown} /></span></h1>
      <div className="chat-input__footer--interactions">
        <FontAwesomeIcon className="chat-input__logo" icon={faImages} size="2x" />
        <FontAwesomeIcon className="chat-input__logo" icon={faPaperclip} size="2x" />
        <button type="button">Send</button>
      </div>
    </div>
  </div>
);

export default ChatInput;
