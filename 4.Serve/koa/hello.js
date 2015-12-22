/*
* @Author: Charles Lim
* @email:  hi@oulve.com
* @Date:   2015-12-14 17:30:29
* @Last Modified by:   Charles Lim
* @Last Modified time: 2015-12-14 22:58:23
*/

var koa = require('koa');
var app = koa();

app.use(function *(){
  this.body = 'Hello koa';
});

app.listen(3000);
