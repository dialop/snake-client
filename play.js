// play.js
const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
const connection = connect(); // Call the connect function
setupInput(connection);



