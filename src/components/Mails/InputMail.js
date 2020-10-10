import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSort, faSearch,
} from '@fortawesome/free-solid-svg-icons';

const InputMail = () => (
  <div className="input-mail">
    <div className="input-mail__field">
      <FontAwesomeIcon icon={faSearch} className="input-mail__field--search" />
      <input placeholder="Search for objects ect." />
    </div>
    <FontAwesomeIcon icon={faSort} className="input-mail__filter" />
  </div>
);

export default InputMail;
