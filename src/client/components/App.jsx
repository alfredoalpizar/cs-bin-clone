import React from 'react';
import { useMessageSocket } from '../util/socket';

const App = () => {
  // const [text, setText] = useState('');
  // useEffect(() => {
  //   ws.addEventListener('message', (e) => {
  //     console.log(e.data);
  //     setText(e.data);
  //   });
  //   return () => {
  //     alert('closing ws connection...');
  //     ws.close();
  //   };
  // }, []);
  const [text, send] = useMessageSocket();
  return (
    <>
      <textarea value={text} onChange={(e) => send(e.target.value)} />
    </>
  );
};
export default App;
