var express = require('express');
var app = express();

var io = require('socket.io')(server);
var http = require('http');
var server = http.Server(app);
var path = require('path')

io.on('connection', function (socket) {
  socket.on('message', function (msg) {
    io.emit('message', msg)
  });
});

app.use(express.static(path.join(__dirname, '../client')))

server.listen(8000, function() {
  console.log('Chat server running');
});

