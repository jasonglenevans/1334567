funcion ()
var wii = require('nodewii')
   , express = require('express')
   , app     = express()
   , http    = require('http')
   , server  = http.createServer(app)
   , io      = require('socket.io').listen(server);
 
  var wiimote = new wii.WiiMote();
 
   wiimote.connect( '00:00:00:00:00:00', function( err ) {
    console.log('connected');

  wiimote.on( 'button', function( data ) {
    io.sockets.emit('button', data);
  });
   });
    var socket = io.connect();
 socket.on( 'button', function( data ) {
   console.log('button was pressed ', data);
 });
 }
