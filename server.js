"use strict";

const serverPort = 3000;
const express = require("express");
const http = require("http");
const WebSocket = require("ws");

const app = express();
const server = http.createServer(app);
const websocketServer = new WebSocket.Server({ server });

//when a websocket connection is established
websocketServer.on("connection", (webSocketClient) => {
  // send feedback to the incoming connection
  console.log("new connection has created", webSocketClient);
  webSocketClient.send("The time is: ");
  setInterval(() => {
    let time = new Date();
    webSocketClient.send("The time is: " + time.toTimeString());
  }, 1000);
});
const PORT = process.env.PORT || 5000;
//start the web server
server.listen(PORT, () => {
  console.log("Websocket server started on port 5000");
});
