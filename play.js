// play.js
const { connect } = require('./client');

console.log("Connecting ...");
connect(); // Call the connect function

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  // Add the data event listener
  stdin.on("data", handleUserInput);

  return stdin;

};

const handleUserInput = function(key) {
  if (key === '\u0003') { //Checks if the user has clicked Ctrl + C
    process.exit(); //  code that calls "process.exit();" to terminate game
  }

};


setupInput();



