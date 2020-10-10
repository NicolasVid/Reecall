import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircle, faStar,
} from '@fortawesome/free-solid-svg-icons';

const Mail = () => (
  <>
    <div className="mail">
      <div className="mail__title">
        <FontAwesomeIcon className="mail__title--tags" icon={faCircle} color="#32BF89" />
        <h1>Marti Lichardson</h1>
        <span>3 hours ago</span>
      </div>
      <h2>Design new project "Anama"</h2>
      <p>How long will it take you to transfer all the data to us ..</p>
    </div>
    <div className="mail mail--active">
      <div className="mail__title">
        <h1>Derek Lichardson <FontAwesomeIcon className="mail__title--star" icon={faStar} color="#FE9F44" /></h1>
        <span>2 days ago</span>
      </div>
      <div className="mail__link">
        <h2>Design Template</h2>
        <a href="/" className="mail__link--psd">Template.psd</a><a href="/" className="mail__link--doc">Description.doc</a>
      </div>
    </div>
    <div className="mail">
      <div className="mail__title">
        <h1>Bogdan Tuman<div className="mail__title--new">NEW</div></h1>

        <span>2 days ago</span>
      </div>
      <h2>Design new project "Anama"</h2>
      <p>Hello everyone, when i can find a new mockups for design, ...</p>
    </div>
    <div className="mail">
      <div className="mail__title">
        <h1>Amarinda Faram<div className="mail__title--new">NEW</div></h1>

        <span>2 days ago</span>
      </div>
      <h2>Dribbble</h2>
      <p>Hi, can you send me a user name on your Dribbble ...</p>
    </div>
    <div className="mail">
      <div className="mail__title">
        <h1>Pam Lovame<div className="mail__title--new">NEW</div></h1>

        <span>2 days ago</span>
      </div>
      <h2>Data Base Server</h2>
      <p>Hello , when you can upload all the data to you on ...</p>
    </div>
  </>
);

export default Mail;
