import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { init } from './util/socket';

init(40510);
render(<App />, document.getElementById('root'));
