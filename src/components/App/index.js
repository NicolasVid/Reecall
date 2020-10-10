import React from 'react';

import Toolbar from '../Toolbar';
import Mails from '../Mails';
import Chat from '../Chat';

import './app.scss';

const App = () => (
  <div className="app">
    <Toolbar />
    <Mails />
    <Chat />
  </div>
);

export default App;
