const WebSocket = require('ws');

module.exports = {
  init() {
    const wss = new WebSocket.Server({ port: 40510 });
    const cache = {};
    wss.on('connection', (ws, req) => {
      const room = req.url.substring(1);
      if (!cache[room]) cache[room] = [ws];
      else cache[room].push(ws);

      ws.on('message', (message) => {
        console.log(`Received message => ${message} from ${room}`);
        cache[room].forEach((cv) => cv.send(message));
      });
    });
  },
};
