var crypto = require('crypto');
var request = require('request');
var querystring = require('querystring');
var merge = require('utils-merge');
var conf = require('./config');

/**
 * 生成签名
 */
function generateSign(params) {
    var keyStr = '';
    var sign;
    params.timestamp = Math.round(new Date().getTime() / 1000);

    //按 key 升序排序
    var arr = new Array();
    for (var value in params) {
        if (value.toLowerCase() !== 'secret_key')
            arr.push(value);
    }
    arr.sort();

    //字符串拼接
    for (var i = 0; i < arr.length; i++) {
        keyStr += arr[i] + params[arr[i]];
    }
    keyStr += params['secret_key'];

    //md5 加密
    var md5 = crypto.createHash('md5');
    md5.update(keyStr);
    sign = md5.digest('hex');
    return sign;
};

/**
 * 调用接口
 */
function httpCall(opts, cb) {
    if (arguments.length != 2)
        return;

    var config = merge(opts, conf);

    //序列化参数
    var sign = generateSign(config);
    delete config.secret_key;
    config.sign = sign;
    var params = querystring.stringify(config);

    //调用
    request('http://api.letvcloud.com/open.php?' + params, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            cb(null, body);
        } else {
            cb(error);
        }
    })
};

function callInterface(api) {
    return function (opts, callback) {
        var cb = callback;
        if (arguments.length === 1)
            cb = opts;
        if (typeof cb !== 'function')
            return;
        opts = merge({api: api}, opts);

        //http请求
        httpCall(opts, function (err, data) {
            if (err)
                cb(err);
            cb(null, JSON.parse(data));
        });
    };
};

module.exports = callInterface;