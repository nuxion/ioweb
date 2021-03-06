const env = process.env.IOWEB_ENV || 'dev';

const dev = {
    redis: { 
        host: process.env.REDIS_HOST || 'redis',
        port: parseInt(process.env.REDIS_PORT, 0) || 6379
    },
    port: parseInt(process.env.IOWEB_PORT, 0) || 3000,
    ioserver: process.env.IOSERVER || 'localhost:3000',
		socketopts: {}
}
const test = {
    redis: { 
        host: process.env.REDIS_HOST || 'redis',
        port: parseInt(process.env.REDIS_PORT, 0) || 6379
    },
    port: parseInt(process.env.IOWEB_PORT, 0) || 3000,
    ioserver: process.env.IOSERVER || 'localhost:3000',
	  socketopts: { path: 'socket/socket.io' }
}

const config = {
    dev,test
};
module.exports = config[env];
