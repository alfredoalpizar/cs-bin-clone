const WebSocket = require('ws');

module.exports = {
  init(port) {
    const wss = new WebSocket.Server({ port });
    const cache = {};
    wss.on('connection', (ws, req) => {
      const room = req.url.substring(1);
      console.log(room);
      console.log(req.url);

      if (!cache[room]) cache[room] = [ws];
      else cache[room].push(ws);

      ws.on('message', (message) => {
        console.log(`Received message => ${message} from ${room}`);
        cache[room].forEach((cv) => cv.send(message));
      });
    });
  },
};
