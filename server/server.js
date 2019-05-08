const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);
const path = require('path')
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, '../client')))

io.on('connection', function (socket) {
  socket.on('message', function (msg) {
    io.emit('message', msg)
  });
});

server.listen(8000, function() {
  console.log('Chat server running');
});

