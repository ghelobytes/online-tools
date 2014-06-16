var host = process.env.OPENSHIFT_NODEJS_HOST ? '0.0.0.0' : '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});
