/* 
* @Author: Charles Lim
* @email:  hi@oulve.com
* @Date:   2015-12-15 16:52:25
* @Last Modified by:   Charles Lim
* @Last Modified time: 2015-12-15 17:43:26
*/

var app      = require('koa')(), // 框架内核
    router   = require('koa-router')(), // 路由中间件
    mongoose = require('mongoose');

// var db = mongoose.createConnection('localhost', 'test');

router.get('/db',
  function *(next) {
  	console.log('d1');
    // console.log(this); 
  	this.body = JSON.stringify('hello mongo');
  }
);

app.use(router.routes());

app.listen(3000);
console.log('start');