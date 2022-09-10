import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

import data from './components/data';
import user from './components/user';

import Statistics from './components/statistics';
import Profile from 'components/profile'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile name={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
    <Statistics stats={data} />
    <App />
  </React.StrictMode>
);