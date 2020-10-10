import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faImages, faPaperclip, faSortDown,
} from '@fortawesome/free-solid-svg-icons';

const ChatInput = () => (
  <div className="chat-input">
    <textarea
      className="chat-input__value"
      placeholder="Your message"
    />
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
