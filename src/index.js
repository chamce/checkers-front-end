import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { setPusherClient } from 'react-pusher';
import Pusher from 'pusher-js';

const pusherClient = new Pusher(
    '801f0d7b827dd14a89ed', {
    cluster: 'us2',
    auth: {
      headers: { "X-CSRF-Token": "<%=801f0d7b827dd14a89ed  %>" }
    }
});

setPusherClient(pusherClient);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
