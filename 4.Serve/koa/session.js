var app = require('koa')(),
    session = require('koa-session'); // session 适用于保存登录状态
 
app.keys = ['some secret']; // 加密盐值
app.use(session(app));
 
app.use(function *(next){
  var n = this.session.views || 0;
  this.session.views = ++n;
  
  this.body = n + ' views';
  console.log(n);
});
 
app.listen(8080);
console.log('listening on port 8080');