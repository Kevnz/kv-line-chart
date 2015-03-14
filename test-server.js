var cling = require('static-cling').cling;

var config = {
    root: '.',
    port: 3456,
    filename: 'example.html'
}
//overriding defaults
cling(config);