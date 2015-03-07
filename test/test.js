var letvcloud = require('./');
var assert = require('assert');


describe('Letvcloud', function () {
    describe('Config', function () {
        it('should have user_unique and secret_key', function () {
            assert.ok(letvcloud.config.user_unique);
            assert.ok(letvcloud.config.secret_key);
        });
    });

    describe('Video', function () {
        describe('.upload.init', function () {
            it('should return some informations about upload', function (done) {
                letvcloud.video.upload.init({video_name: 'my video'}, function (err, data) {
                    if (err) {
                        throw err;
                    }
                    assert.strictEqual(data.code, 0);
                    done();
                });
            });
        });


        describe('.upload.web', function () {
            it('should upload a video and return success', function (done) {
                letvcloud.video.upload.web('my video',  __dirname +'/test.mp4', function (err, data) {
                    if (err) {
                        throw err;
                    }
                    assert.strictEqual(data.code, 0);
                    done();
                });
            });
        });

        describe('.list', function () {
            it('should return a video list', function (done) {
                letvcloud.video.list(function (err, data) {
                    if (err) {
                        throw err;
                    }
                    assert.strictEqual(data.code, 0);
                    done();
                });
            });
        });

        describe('.update', function () {
            it('should update and return success', function (done) {
                letvcloud.video.update({video_id: '9395501', video_name: 'new name'}, function (err, data) {
                    if (err) {
                        throw err;
                    }
                    assert.strictEqual(data.code, 0);
                    done();
                });
            });
        });

        describe('.get', function () {
            it('should return single information', function (done) {
                letvcloud.video.get({video_id: '9395501'}, function (err, data) {
                    if (err) {
                        throw err;
                    }
                    assert.strictEqual(data.code, 0);
                    done();
                });
            });
        });

        describe('.pause', function () {
            it('should pause a video', function (done) {
                letvcloud.video.pause({video_id: '9395501'}, function (err, data) {
                    if (err) {
                        throw err;
                    }
                    done();
                });
            });
        });

        describe('.restore', function () {
            it('should restore a video', function (done) {
                letvcloud.video.restore({video_id: '9395501'}, function (err, data) {
                    if (err) {
                        throw err;
                    }
                    done();
                });
            });
        });

        describe('.del', function () {
            it('should delete a video', function (done) {
                letvcloud.video.del({video_id: '9395803'}, function (err, data) {
                    if (err) {
                        throw err;
                    }
                    done();
                });
            });
        });

        describe('.del.batch', function () {
            it('should delete a list of video', function (done) {
                letvcloud.video.del({video_id: '9395803-9395802'}, function (err, data) {
                    if (err) {
                        throw err;
                    }
                    done();
                });
            });
        });
    });

    describe('Image', function () {
        describe('.get', function () {
            it('should get a list of screenshots', function (done) {
                letvcloud.image.get({video_id: '9395501', size: '100_100'}, function (err, data) {
                    if (err) {
                        throw err;
                    }
                    assert.strictEqual(data.code, 0);
                    done();
                });
            });
        });
    });

    describe('Data', function () {
        describe('.video.hour', function () {
            it('should get a list of data', function (done) {
                letvcloud.data.video.hour({date: '2014-03-07'}, function (err, data) {
                    if (err) {
                        throw err;
                    }
                    assert.strictEqual(data.code, 0);
                    done();
                });
            });
        });

        describe('.video.date', function () {
            it('should get a list of data', function (done) {
                letvcloud.data.video.date({start_date: '2014-03-03', end_date: '2014-03-07'}, function (err, data) {
                    if (err) {
                        throw err;
                    }
                    ;
                    assert.strictEqual(data.code, 0);
                    done();
                });
            });
        });

        describe('.total.date', function () {
            it('should get a list of data', function (done) {
                letvcloud.data.total.date({start_date: '2014-03-03', end_date: '2014-03-07'}, function (err, data) {
                    if (err) {
                        throw err;
                    }
                    assert.strictEqual(data.code, 0);
                    done();
                });
            });
        });
    });
});
