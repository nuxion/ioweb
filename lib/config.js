const env = process.env.IOWEB_ENV || 'dev';

const dev = {
    redis: { 
        host: process.env.REDIS_HOST || 'redis',
        port: parseInt(process.env.REDIS_PORT, 0) || 6379
    },
    port: parseInt(process.env.IOWEB_PORT, 0) || 3000
}
const config = {
    dev
};
module.exports = config[env];
