import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars, faFilter, faReply, faTrash, faEllipsisH, faStar,
} from '@fortawesome/free-solid-svg-icons';

const ChatHeader = () => (
  <div className="chat-header">
    <FontAwesomeIcon icon={faBars} className="chat-header__icon--menu" size="2x" />
    <div className="chat-header__text">
      <h1>Derek Lichardson<FontAwesomeIcon className="chat-header__text--star" icon={faStar} color="#FE9F44" /></h1>
      <p>derek.lichardson@gmail.com</p>
    </div>
    <div className="chat-header__logos">
      <FontAwesomeIcon className="chat-header__logos--item" icon={faFilter} />
      <FontAwesomeIcon className="chat-header__logos--item" icon={faReply} />
      <FontAwesomeIcon className="chat-header__logos--item" icon={faTrash} />
      <FontAwesomeIcon className="chat-header__logos--item" icon={faEllipsisH} />
    </div>
  </div>
);

export default ChatHeader;
