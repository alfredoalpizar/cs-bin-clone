const express = require('express');
const path = require('path');
const socket = require('./socket');

const app = express();
app.use('/build', express.static(path.join(__dirname, '..', '..', 'build')));
app.get('/:room', (req, res) => res.sendFile(path.join(__dirname, '..', '..', 'build', 'index.html')));
app.listen(3000, () => console.log('listening 3000'));
socket.init();
