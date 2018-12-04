# IOWeb #

Websocket server based on SocketIO. 

The main purpose its send and receive messages from webapp and backend workers too.
This use redis PUB/SUB to listen notifications from backend and send emit the messages to a Vue Client. At the same time, listen to notifications from the front.

## Endpoints ##

**`notifications/`** *Methods [GET]*

Check with Redis if has any new notification and response a JSON with
```
{ 
  id: int -> timestamp
  msg: string -> text
}
```

**`static/`** *Methods [GET]*

Wich return socket-io client library for dev and production.

## Docker image

```
docker run nuxion/iowebnotif
```
#### ENV values ####

*REDIS_HOST*: ip or fqdn  || 'redis'

*REDIS_PORT*: port || 6379

*PORT*: wich express listen || 3000

*ENV*: dev is the unique environment right now.


## Standalone run ##
```
npm install
npm start
```

