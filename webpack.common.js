const path = require('path');

module.exports = {
    entry: './lib/web.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'lib/dist')
    }
};
