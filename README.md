# LetvCloud
LetvCloud SDK for Node.js. 乐视云视频SDK

## 关于
基于乐视云视频2.0接口,[详细文档查看](http://www.letvcloud.com/api/aboutinfo)

## 安装

你可以从 npm 进行安装

```shell
npm install letvcloud -save
```

也可以从 Github 进行下载安装

```shell
$ git clone https://github.com/daysv/LetvCloud.git
```

## 使用
### 引入SDK

```js
var letvcloud=require('letvcloud');
```

### 配置 `letvcloud()`

设置全局参数 user_unique 和 secret_key。

```js
letvcloud({
    user_unique: '----------',
    secret_key: '----------'
});
```

## 视频管理
### 视频上传初始化
功能描述：视频上传前调用，获取正式上传时需要的一些信息
应用参数说明：
<table>
<tbody>
<tr><td><em>名称</em></td><td><em>类型</em></td><td><em>必选</em></td><td>描述</td></tr>
<tr><td>video_name</td><td>string(200)</td><td>Y</td><td>视频名称</td></tr>
<tr><td>client_ip</td><td>string(15)</td><td>N</td><td>用户 IP 地址。为了保证用户上传的速度，建议将用户公网 IP 地址写入该参数</td></tr>
<tr><td>file_size</td><td>int</td><td>N</td><td>文件大小，单位为字节</td></tr>
</tbody>
</table>

```js
video.upload.init({video_name:name},function(err,data){
    console.log(data);
})
```

### 视频上传(web 方式)
功能描述：上传视频

```js
letvcloud.video.upload.web('my video','./1.mp4',function(err,data){
    res.send(data);
});
```

### 视频信息更新
功能描述：编辑单个视频的相关信息
应用参数说明：
<table>
<tbody>
<tr><td><em>名称</em></td><td><em>类型</em></td><td><em>必选</em></td><td>描述</td></tr>
<tr><td>video_id</td><td>int</td><td>Y</td><td>视频 ID</td></tr>
<tr><td>video_name</td><td>string(200)</td><td>N</td><td>视频名称</td></tr>
<tr><td>video_desc </td><td>string(500)</td><td>N</td><td>视频简介</td></tr>
<tr><td>tag</td><td>string(200)</td><td>N</td><td>视频名称</td></tr>
<tr><td>is_pay </td><td>int</td><td>N</td><td>视频简介</td></tr>
</tbody>
</table>

```js
letvcloud.video.update({video_id:'9342824',video_name:'newName'},function(err,data){
    console.log(data);
});
```

### 获取视频列表
功能描述：获取视频列表信息
应用参数说明：
<table>
<tbody>
<tr><td><em>名称</em></td><td><em>类型</em></td><td><em>必选</em></td><td>描述</td></tr>
<tr><td>index</td><td>int</td><td>N</td><td>开始页索引，默认值为 1</td></tr>
<tr><td>size </td><td>int</td><td>N</td><td>分页大小，默认值为 10，最大值为 100</td></tr>
<tr><td>status </td><td>int</td><td>N</td><td>视频状态：0 表示全部；10 表示可以正常播放；20 表示处理失败；30 表示正在处理过程中。默认值为 0</td></tr>
</tbody>
</table>

```js
letvcloud.video.list(function (err, data) {
    console.log(data);
});
//或者
letvcloud.video.list({index:2},function (err, data) {
    console.log(data);
});
```

### 获取单个视频信息
功能描述：获取单个视频的详细信息
应用参数说明：
<table>
<tbody>
<tr><td><em>名称</em></td><td><em>类型</em></td><td><em>必选</em></td><td>描述</td></tr>
<tr><td>video_id</td><td>int</td><td>Y</td><td>视频 ID</td></tr>
</tbody>
</table>

```js
letvcloud.video.get({video_id: '9342824'}, function (err, data) {
    console.log(data);
});
```

### 视频删除
功能描述：删除视频
应用参数说明：
<table>
<tbody>
<tr><td><em>名称</em></td><td><em>类型</em></td><td><em>必选</em></td><td>描述</td></tr>
<tr><td>video_id</td><td>int</td><td>Y</td><td>视频 ID</td></tr>
</tbody>
</table>

```js
letvcloud.video.get({video_id: '9342824'}, function (err, data) {
    console.log(data);
});
```

### 视频批量删除
功能描述：批量删除视频
应用参数说明：
<table>
<tbody>
<tr><td><em>名称</em></td><td><em>类型</em></td><td><em>必选</em></td><td>描述</td></tr>
<tr><td>video_id_list</td><td>int</td><td>Y</td><td>视频 ID 列表，使用符号-作为间隔符，每次最多操作50 条记录</td></tr>
</tbody>
</table>

```js
letvcloud.video.get({video_id: '9342824-9347690'}, function (err, data) {
    console.log(data);
});
```

### 视频暂停
功能描述：对播放正常的视频进行暂停操作
应用参数说明：
<table>
<tbody>
<tr><td><em>名称</em></td><td><em>类型</em></td><td><em>必选</em></td><td>描述</td></tr>
<tr><td>video_id</td><td>int</td><td>Y</td><td>视频 ID</td></tr>
</tbody>
</table>

```js
letvcloud.video.pause({video_id: '9347690'}, function (err, data) {
    console.log(data);
});
```

### 视频恢复
功能描述：对播放正常的视频进行暂停操作
应用参数说明：
<table>
<tbody>
<tr><td><em>名称</em></td><td><em>类型</em></td><td><em>必选</em></td><td>描述</td></tr>
<tr><td>video_id</td><td>int</td><td>Y</td><td>视频 ID</td></tr>
</tbody>
</table>

```js
letvcloud.video.restore({video_id: '9347690'}, function (err, data) {
    console.log(data);
});
```

## 截图管理
### 获取视频截图
功能描述：获取视频截图
应用参数说明：
<table>
<tbody>
<tr><td><em>名称</em></td><td><em>类型</em></td><td><em>必选</em></td><td>描述</td></tr>
<tr><td>video_id</td><td>int</td><td>Y</td><td>视频 ID</td></tr>
<tr><td>size</td><td>string</td><td>Y</td><td>截图尺寸，每种尺寸各有8张图。有以下尺寸供选择：100_100 、200_200 、300_300、120_90、128_96、132_99、160_120、200_150、400_300、160_90、 320_180、 640_360、 90_120、 120_160 、150_200、300_400</td></tr>
</tbody>
</table>

```js
letvcloud.image.get({video_id: '9347690', size: '100_100'}, function (err, data) {
    console.log(data);
});
```

## 数据统计
### 视频小时数据
功能描述：获取以小时为单位的视频数据
应用参数说明：
<table>
<tbody>
<tr><td><em>名称</em></td><td><em>类型</em></td><td><em>必选</em></td><td>描述</td></tr>
<tr><td>date</td><td>string(10) </td><td>Y</td><td>日期，格式为：yyyy-mm-dd</td></tr>
<tr><td>hour</td><td>int</td><td>N</td><td>小时，0-23 之间</td></tr>
<tr><td>video_id </td><td>int</td><td>N</td><td>视频 ID</td></tr>
<tr><td>index</td><td>int</td><td>N</td><td>开始页索引，默认值为 1</td></tr>
<tr><td>size</td><td>int</td><td>N</td><td>分页大小，默认值为 10，最大值为 100</td></tr>
</tbody>
</table>

```js
letvcloud.data.video.hour({date: '2014-03-03'}, function (err, data) {
    console.log(data);
});
```

### 视频天数据
功能描述：获取以天为单位的视频数据
应用参数说明：
<table>
<tbody>
<tr><td><em>名称</em></td><td><em>类型</em></td><td><em>必选</em></td><td>描述</td></tr>
<tr><td>start_date</td><td>string(10)</td><td>Y</td><td>开始日期，格式为：yyyy-mm-dd</td></tr>
<tr><td>end_date </td><td>string(10)</td><td>Y</td><td>结束日期，格式为：yyyy-mm-dd</td></tr>
<tr><td>video_id </td><td>int</td><td>N</td><td>视频ID，不输入该参数将返回所有视频的数据</td></tr>
<tr><td>index</td><td>int</td><td>N</td><td>开始页索引，默认值为 1</td></tr>
<tr><td>size</td><td>int</td><td>N</td><td>分页大小，默认值为 10，最大值为 100</td></tr>
</tbody>
</table>

```js
letvcloud.data.total.date({start_date: '2014-03-03', end_date: '2014-03-04'}, function (err, data) {
    console.log(data);
});
```

### 所有数据
功能描述：获取以天为单位的所有数据
应用参数说明：
<table>
<tbody>
<tr><td><em>名称</em></td><td><em>类型</em></td><td><em>必选</em></td><td>描述</td></tr>
<tr><td>start_date</td><td>string(10)</td><td>Y</td><td>开始日期，格式为：yyyy-mm-dd</td></tr>
<tr><td>end_date </td><td>string(10)</td><td>Y</td><td>结束日期，格式为：yyyy-mm-dd</td></tr>
<tr><td>index</td><td>int</td><td>N</td><td>开始页索引，默认值为 1</td></tr>
<tr><td>size</td><td>int</td><td>N</td><td>分页大小，默认值为 10，最大值为 100</td></tr>
</tbody>
</table>

```js
letvcloud.data.total.date({start_date: '2014-03-03', end_date: '2014-03-04'}, function (err, data) {
    console.log(data);
});
```

# License
MIT
