/*
* @Author: Charles Lim
* @email:  hi@oulve.com
* @Date:   2015-12-15 09:22:24
* @Last Modified by:   Charles Lim
* @Last Modified time: 2015-12-16 09:47:11
*/

var app     = require('koa')(), // 框架内核
    router  = require('koa-router')(), // 路由中间件
    cors    = require('koa-cors'), // 支持跨域ajax中间件
    koaBody = require('koa-body')(); // 增强body中间件，获取post数据需要使用koa-body中间件，获取get数据则不需要使用koa-body中间件

router.get('/users/:id/:name',
  function *(next) {
  	console.log('g1');
    // console.log(this);
  	console.log(this.params); // { id: 17, name: "Alex" }
    this.user = this.params.id;
    yield next;
  },
  function *(next) {
  	console.log('g2');
    console.log(this.user+', '+this.params.name);
    this.body = JSON.stringify('some message: '+this.user+', '+this.params.name);
    yield next;
  },
  function *(next) {
  	console.log('g3');
    // this.redirect('http://google.com'); // 页面跳转至谷歌 PS：不要在ajax处理逻辑中使用
  }
);

router.post('/users', koaBody,
  function *(next) {
  	console.log('p1');
  	console.log(this.request.body); // { id: 17, name: "Alex" } PS: 数据采用x-www-form格式
    this.user = this.request.body.id;
    yield next;
  },
  function *(next) {
  	console.log('p2');
    console.log(this.user+', '+this.request.body.name);

    var arr = {'title': 'some message: '+this.user+' : '+this.request.body.name, 'content': ['内容一', '内容二', '内容三']};
    this.body = JSON.stringify(arr);
  }
);

app.use(cors());
app.use(router.routes());

app.listen(8080);
console.log('koa ajax start');
