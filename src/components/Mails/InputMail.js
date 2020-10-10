import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSort,
} from '@fortawesome/free-solid-svg-icons';

const InputMail = () => (
  <div className="input-mail">
    <input placeholder="Search for objects ect." />
    <FontAwesomeIcon icon={faSort} className="input-mail__filter" />
  </div>
);

export default InputMail;
