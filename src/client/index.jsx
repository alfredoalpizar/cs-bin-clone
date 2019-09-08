import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

const room = window.location.pathname.split('/')[1];
const url = `ws://localhost:40510/${room}`;
const ws = new WebSocket(url);
ws.onopen = () => {
  // connection.send('wars');
  console.log('connection opened on ', room);
};
ws.onerror = (error) => {
  console.log(`WebSocket error: ${JSON.stringify(error)}`);
};
render(<App ws={ws} />, document.getElementById('root'));
