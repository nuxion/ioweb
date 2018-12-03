const env = process.env.IOWEB || 'dev';

const dev = {
    redis: { 
        host: process.env.REDIS_HOST || 'redis',
        port: process.env.REDIS_PORT || 6379
    }
}
const config = {
    dev
};
module.exports = config[env];
