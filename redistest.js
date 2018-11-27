var Redis = require('ioredis');
var redis = new Redis('redis://redis');
var pub = new Redis('redis://redis');
redis.subscribe('news');

redis.on('message', function (channel, message) {
  // Receive message Hello world! from channel news
  // Receive message Hello again! from channel music
  console.log('Receive message %s from channel %s', message, channel);
});

//There's also an event called 'messageBuffer', which is the same as 'message' except
//it returns buffers instead of strings.
