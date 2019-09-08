import React, { useState, useEffect } from 'react';

const App = ({ ws }) => {
  const [text, setText] = useState('');
  useEffect(() => {
    ws.addEventListener('message', (e) => {
      console.log(e.data);
      setText(e.data);
    });
    return () => {
      alert('closing ws connection...');
      ws.close();
    };
  }, []);

  return (
    <>
      <textarea value={text} onChange={(e) => ws.send(e.target.value)} />
    </>
  );
};
export default App;
