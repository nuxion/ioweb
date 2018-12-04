const app = require('express')();
const express = require('express');
const http = require('http').Server(app);
const cors = require('cors');
const config = require('./config');
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
const Redis = require('ioredis');

subscriber = new Redis(config.redis);
redclient = new Redis(config.redis);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/static', express.static(__dirname + '/dist'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/dist/index.html');
});

/*app.post('/report', function(req, res){
    console.log(req.body)
    io.emit('notify', req.body);
    res.send(req.body);

});*/

/**
 * /notifications
 * [get] 
 * Obtiene las notificaciones desde redis. 
 */
app.get('/notifications', function(req, res){
    redclient.zrange('users', 0, -1, 'WITHSCORES').then(
        (data) => {
            let response = [];
            for (i = 0; i< data.length; i++){
                console.log((i+2)/2);
                if((i+2)%2 === 0){
                    response.push({id: data[i+1], text: data[i]});
                }
            }
            res.send(response);
        }
    );
});

io.on('connection', function(socket){
  console.log('a user connected');
    socket.on('notify', function(msg){
        console.log(msg.text);
        console.log(msg.id);
        console.log("ON NOTIFY");
        io.emit('notify', msg);
    });
    socket.on('website', function(msg){
        console.log(`Website event from:${msg}`);
        console.log(msg);
        redclient.zremrangebyscore('users', msg.id, msg.id);
    });
});

subscriber.subscribe('notify', function(err, count){
    console.log(count);
})

/**
 * From redis.subscriber add message to channel 'notify' 
 * of iosockets.
 * Message interfaz: {id: timestamp, text: string}
 */
subscriber.on('message', function(channel, message) {
    console.log('Receive message %s from channel %s', message, channel);
    timeid = Date.now() / 1000 | 0;
    msg = {id: timeid, text: message};
    redclient.zadd('users', timeid, message).then((data) => io.emit('notify', msg));
    //io.emit('notify', {id: timeid, text: message});
    });

http.listen(config.port, function(){
  console.log('listening on *:3000');
});
