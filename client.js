// client.js
const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: '50541'
  });

  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = {
  connect
};















// // Import any required modules or functions
// const net = require('net'); // Example import

// // Define the connect function
// function connect() {
//   // Your connect function code here
// }

// // Export the connect function using ES6 Shorthand syntax
// module.exports = {
//   connect,
// };