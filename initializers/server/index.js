/* eslint-disable */
var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');

var config = require('../../webpack.config');

var host = 'localhost',
    port = 3000;

new webpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    },
    historyApiFallback: true,
    hot: true
}).listen(port, host, (err) => {
    (err) ? console.log(err) : console.log('Listening at', host, 'on port', port);
});
