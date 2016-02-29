var app = require('koa')();
// var session = require('koa-session');
 
app.keys = ['some secret'];
// app.use(session(app));
 
app.use(function *(){
    
  var n = 0;
  // var n = this.session.views || 0;
  console.log(n);
  /*this.session.views = ++n;*/
  this.body = n + ' views';
});
 
app.listen(8080);
console.log('listening on port 8080');