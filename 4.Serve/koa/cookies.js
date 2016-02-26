var app = require('koa')(); // koa 自动 cookies 模块

app.keys = ['secret', 'key']; // cookies 中 signed 依赖这行代码，使cookies设置签名

app.use(function *(){
  this.body = 'koa cookies';
  
  // 如果存在则增加一次，否则为 cookies 设置 foo 字段，并初始化为 1。
  if(this.cookies.get('foo', { signed: true })) {
    var val = parseInt(this.cookies.get('foo'), { signed: true }) + 1;
    
    if(val <= 5) {
        this.cookies.set('foo', val, { signed: true }); // 使用 set 方法，默认会更改过期时间
        console.log('第 ' + val + ' 次来此页面' + ' timeC: ' + new Date(Date.now()));
    } else {
        this.cookies.set('foo', '', { signed: true });
        console.log("超过5次操作，自动退出");
    }
    
  } else {
    var timeA = Date.now();
    var timeB = new Date(timeA + 5000); // 5s 之后
    console.log('timeA: ' + new Date(timeA) + ' -------- timeB: ' + timeB);
    this.cookies.set('foo', 1, { signed: true, expires: timeB}); // 这部分待优化，需要把 timeB 存储到其他地方
    console.log("欢迎第一次来这里");
  }
});

app.listen(8080);
console.log('start');