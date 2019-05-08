const socket = io();

$('form').submit(function () {
  const text = $('#message').val();
  socket.emit('message', text);
  $('#message').val('');
  return false;
});

socket.on('message', function (msg) {
  $('<li>').text(msg).appendTo('#history');
});
