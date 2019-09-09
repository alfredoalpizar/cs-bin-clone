import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { init } from './util/socket';

init();
render(<App  />, document.getElementById('root'));
