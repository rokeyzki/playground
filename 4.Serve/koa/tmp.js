var app    = require('koa')(), // 框架内核
    router = require('koa-router')(), // 路由中间件
    render = require('koa-views'); // 模板引擎选择器

app.use(render('views', {
  map: {
    html: 'nunjucks' // 使用 nunjucks 模板引擎，sudo npm install nunjucks -save
  }
}));

router.get('/',
    function *(next) {
        yield this.render('index', { title: '标题' });
    }
);

app.use(router.routes());

app.listen(8080);
console.log('koa tmp start');
