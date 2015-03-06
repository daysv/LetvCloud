var callInterface = require('./callInterface');

var image = {};

/**
 * 获取视频截图
 */
image.get = callInterface('image.get');

module.exports = image;
