// input.js

const { connect } = require('./client');

// Initialization of connect variable
let connection;

const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
    
  // Add the data event listener
  stdin.on('data', handleUserInput);

};

const handleUserInput = function(key) {
  if (key === 'w') {
    connection.write('Move: up');
  }

  if (key === 'a') {
    connection.write('Move: left');
  }

  if (key === 's') {
    connection.write('Move: down');
  }

  if (key === 'd') {
    connection.write('Move: right');
  }

  if (key === '\u0003') { // Checks if the user has clicked Ctrl + C
    process.exit();  // Terminate game
  }
  
};

 
  
module.exports = {
  setupInput

};
  
  