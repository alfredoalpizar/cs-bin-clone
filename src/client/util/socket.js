import { useState, useEffect } from 'react';

let ws;
console.log('WS HAS BEEN INSTANTIATED AS UNDEFINED');
export const init = (port) => {
  const room = window.location.pathname;
  const url = `ws://localhost:${port + room}`;
  ws = new WebSocket(url);
  ws.onopen = () => {
    // connection.send('wars');
    console.log('connection opened on ', room);
  };
  ws.onerror = (error) => {
    console.log(`WebSocket error: ${JSON.stringify(error)}`);
  };
};

export const useMessageSocket = () => {
  const [text, setText] = useState('');
  console.log('USING CUSTOM HOOK: ', ws);
  useEffect(() => {
    ws.addEventListener('message', (e) => {
      console.log(e.data);
      setText(e.data);
    });
    console.log('INSIDE USE EFFECT: ', ws);
    return () => {
      alert('closing ws connection...');
      ws.close();
    };
  }, []);
  return [text, (val) => ws.send(val)];
};
