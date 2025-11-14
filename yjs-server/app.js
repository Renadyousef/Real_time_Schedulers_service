const express = require('express');
const { WebSocketServer } = require('ws');
const { setupWSConnection } = require('y-websocket/bin/utils.js');

const app = express();

// Middleware example (if needed)

app.use(express.json());

//routes

module.exports = {app};
