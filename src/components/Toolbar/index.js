import React from 'react';

import Profil from './Profil';
import MailMenu from './MailMenu';
import WorkMenu from './WorkMenu';
import TagsMenu from './TagsMenu';

import './toolbar.scss';

const Toolbar = () => (
  <div className="toolbar">
    <Profil />
    <MailMenu />
    <WorkMenu />
    <TagsMenu />
  </div>
);

export default Toolbar;
