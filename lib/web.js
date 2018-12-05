import $ from 'jquery';
import io from 'socket.io-client';
import conf from './config';

$(function () {
    //var socket = io(conf.ioserver);
    var socket = io('http://ckan-desarrollo.jus.gob.ar', {path: '/socket'});
    console.log(conf.ioserver);
    $('form').submit(function(){
      socket.emit('notify', $('#m').val());
      $('#m').val('');
      return false;
    });
    socket.on('notify', function(msg){
      $('#messages').append($('<li>').text(msg));
    });
  });

