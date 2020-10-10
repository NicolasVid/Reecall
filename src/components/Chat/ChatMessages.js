/* eslint-disable max-len */
import React from 'react';
import profilPicture from 'src/images/profilPicture.jpg';
import derek from 'src/images/Derek.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDownload,
} from '@fortawesome/free-solid-svg-icons';

const ChatMessages = () => (
  <div className="chat-messages">
    <div className="chat-messages__header">
      <h1>Design Template</h1>
      <p>2 June 2020</p>
    </div>
    <div className="chat-messages__message">
      <div className="chat-messages__message--content">
        <h1>Good afternoon</h1>
        <p><br />We've all received those flashy marketing emails that catch our eye and encourage us
          to take action. They ofter follow all the rules for a successful email marketing
          campaign and often yield great results. However, there is power in plain text email
          marketing in certain circumstances.
        </p>
        <h1><br />With kind regards</h1>
        <p>Molly Palt</p>
      </div>
      <span>11:23</span>
    </div>
    <div className="chat-messages__message">
      <img
        src={derek}
        alt="derek_picture"
      />
      <div className="chat-messages__message--link">
        <div className="PSD">PSD</div>
        <div className="chat-messages__message--link--text">
          <h1>Template</h1>
          <p>PSD</p>
        </div>
        <FontAwesomeIcon icon={faDownload} className="chat-header__icon--menu" size="2x" />
      </div>
      <div className="chat-messages__message--link">
        <div className="ZIP">ZIP</div>
        <div className="chat-messages__message--link--text">
          <h1>Description</h1>
          <p>ZIP</p>
        </div>
        <FontAwesomeIcon icon={faDownload} className="chat-header__icon--menu" size="2x" />
      </div>
    </div>
    <div className="chat-messages__message">
      <img
        src={profilPicture}
        alt="profil_picture"
      />
      <div className="chat-messages__message--content">
        <h1>Hi,</h1>
        <p>I will send you the full scope of work after shooping, because im busy now.</p>
      </div>
      <span>11:23</span>
    </div>
  </div>
);

export default ChatMessages;
