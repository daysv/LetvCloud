var video = require('./video');
var image = require('./image');
var data = require('./data');
var config = require('./config');

var letvcloud = function (opts) {
    config.user_unique = opts.user_unique;
    config.secret_key = opts.secret_key;
};

letvcloud.config = config;
letvcloud.video = video;
letvcloud.image = image;
letvcloud.data = data;

module.exports = letvcloud;


