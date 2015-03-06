var callInterface = require('./callInterface');

var data = {
    total: {},
    video: {}
};
/**
 * 视频小时数据
 */
data.video.hour = callInterface('data.video.hour');

/**
 * 视频天数据
 */
data.video.date = callInterface('data.video.date');

/**
 * 所有数据
 */
data.total.date = callInterface('data.total.date');


module.exports = data;
