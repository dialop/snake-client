// play.js
const { connect } = require('./client');
const { setupInput } = require("./input");

console.log("Connecting ...");
connect(); // Call the connect function

setupInput();



