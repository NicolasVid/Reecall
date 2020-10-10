import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircle,
} from '@fortawesome/free-solid-svg-icons';

const TagsMenu = () => (
  <div className="tags-menu">
    <h1>Tags</h1>
    <div className="tags-menu__item">
      <FontAwesomeIcon className="tags-menu__item--logo" icon={faCircle} color="#4E67D6" />
      <h2>Client</h2>
    </div>
    <div className="tags-menu__item">
      <FontAwesomeIcon className="tags-menu__item--logo" icon={faCircle} color="#D8965E" />
      <h2>Work</h2>
    </div>
    <div className="tags-menu__item">
      <FontAwesomeIcon className="tags-menu__item--logo" icon={faCircle} color="#32BF89" />
      <h2>Family</h2>
    </div>
    <div className="tags-menu__item">
      <FontAwesomeIcon className="tags-menu__item--logo" icon={faCircle} color="#768FE0" />
      <h2>Friends</h2>
    </div>
  </div>
);

export default TagsMenu;
