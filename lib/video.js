var callInterface = require('./callInterface');
var request = require('request');
var fs = require('fs');

var video = {
    upload: {}
};

/**
 * 视频上传初始化
 */
video.upload.init = callInterface('video.upload.init');

/**
 * 视频上传
 */
video.upload.web = function (name, path, callback) {
    var formData = {
        my_field: 'video_file',
        my_file: fs.createReadStream(path)
    };
    video.upload.init({video_name: name}, function (err, data) {
        if (err)
            return callback(err);
        if (!data.data.upload_url)
            return callback(JSON.parse(data));
        request.post({
            url: data.data.upload_url,
            formData: formData
        }, function optionalCallback(err, httpResponse, body) {
            if (err)
                return callback(err);
            callback(null, JSON.parse(body));
        });
    });
};

/**
 * 视频信息更新
 */
video.update = callInterface('video.update');

/**
 * 获取视频列表
 */
video.list = callInterface('video.list');

/**
 * 获取单个视频信息
 */
video.get = callInterface('video.get');

/**
 * 视频删除
 */
video.del = callInterface('video.del');

/**
 * 视频批量删除
 */
video.del.batch = callInterface('video.del.batch');

/**
 * 视频暂停
 */
video.pause = callInterface('video.pause');

/**
 * 视频恢复
 */
video.restore = callInterface('video.restore');

module.exports = video;
