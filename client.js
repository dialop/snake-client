// client.js
const net = require('net');
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log('Server says:', data);
  });

  // Connect the event handler
  conn.on('connect', () => {
    console.log('Connection to game server has been successful');

  });
  return conn;
};

module.exports = {
  connect
};


/* "hard-core code": Used setInterval() to send the move up command (automatically) to game server.
setInterval(() => {
  conn.write('Move: up');
   }, 50);
  });
  conn.write('Move: up');
return conn;
*/



