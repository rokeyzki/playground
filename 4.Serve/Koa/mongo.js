/*
* @Author: Charles Lim
* @email:  hi@oulve.com
* @Date:   2015-12-15 16:52:25
* @Last Modified by:   Charles Lim
* @Last Modified time: 2015-12-17 15:23:33
*/

var app      = require('koa')(), // 框架内核
    router   = require('koa-router')(), // 路由中间件
    gzip     = require('koa-gzip'), // gzip压缩（待确认是否有效执行）
    mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/foo');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

router.get('/db',
  function *(next) {
  	console.log('d1');
    // console.log(this);
  	this.body = JSON.stringify('hello mongo');
  }
);

app.use(gzip());
app.use(router.routes());

app.listen(3000);
console.log('start');
