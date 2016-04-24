var app    = require('koa')(), // 框架内核
    staticServer = require('koa-static'), // 静态资源服务器
    router = require('koa-router')(), // 路由中间件
    render = require('koa-views'); // 模板引擎选择器

app.use(staticServer('static'));

app.use(render('static', {
  map: {
    html: 'nunjucks' // 使用 nunjucks 模板引擎，sudo npm install nunjucks -save
  }
}));

router.get('/',
  function *(next) {
    yield this.render('templates/index', { title:'nunjucks 模板引擎', info: '点击下方链接' });
  }
);

router.get('/other',
  function *(next) {
    yield this.render('templates/other', { title: 'Hello', someText: 'Add some todos form KOA' });
  }
);

app.use(router.routes());

// app.listen(80);
app.listen(8080);
console.log('koa serve start');
