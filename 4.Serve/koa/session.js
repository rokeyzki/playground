var app = require('koa')(),
    session = require('koa-session');
 
app.keys = ['some secret'];
app.use(session(app));
 
app.use(function *(next){
  var n = this.session.views || 0;
  this.session.views = ++n;
  
  this.body = n + ' views';
  console.log(n);
});
 
app.listen(8080);
console.log('listening on port 8080');