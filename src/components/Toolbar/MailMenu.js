import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt, faPaperPlane, faAd, faBookmark, faClipboardList, faBolt,
} from '@fortawesome/free-solid-svg-icons';

const MailMenu = () => (
  <div className="mail-menu">
    <ul>
      <li className="mail-menu__item mail-menu__item--active">
        <FontAwesomeIcon className="mail-menu__item--logo" icon={faBolt} />
        <h1>Inbox</h1>
        <p>32</p>
      </li>
      <li className="mail-menu__item">
        <FontAwesomeIcon className="mail-menu__item--logo" icon={faPaperPlane} />
        <h1>Sent</h1>
        <p> </p>
      </li>
      <li className="mail-menu__item">
        <FontAwesomeIcon className="mail-menu__item--logo" icon={faClipboardList} />
        <h1>Draft</h1>
        <p> </p>
      </li>
      <li className="mail-menu__item">
        <FontAwesomeIcon className="mail-menu__item--logo" icon={faCalendarAlt} />
        <h1>Reminder</h1>
        <p>5</p>
      </li>
      <li className="mail-menu__item">
        <FontAwesomeIcon className="mail-menu__item--logo" icon={faAd} />
        <h1>Spam</h1>
        <p> </p>
      </li>
      <li className="mail-menu__item">
        <FontAwesomeIcon className="mail-menu__item--logo" icon={faBookmark} />
        <h1>Mark<span>*</span></h1>
        <p> </p>
      </li>
    </ul>
  </div>
);

export default MailMenu;
