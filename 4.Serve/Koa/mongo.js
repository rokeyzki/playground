var app      = require('koa')(), // 框架内核
    router   = require('koa-router')() // 路由中间件
    mongoose = require('mongoose');

var db = mongoose.connection;    

db.on('error',console.error);
db.once('open',function(){
  console.log('ok');
  //在这里创建你的模式和模型
  // Schema 模式
  var BookSchema = new mongoose.Schema({
    name: String,
    age: Number,
    time: Date
  });
  // Model 模型
  mongoose.model('Book', BookSchema);
  
  // db save
  var Book = mongoose.model('Book');
  
  var book = new Book({
    name: "rokey",
    age: "28",
    time: new Date()
  })
  
  book.save(function(err){
    console.log('save status:', err ? 'failed' : 'success');
  });
  
  // db find
  Book.find({}, function(err, docs){
    if(err){
      console.log('err:', err);
      return;
    }else{
      console.log('result:', docs);
    }
  });
  
  /*Book.findOne({_id:"5672d4a4b969af4410aa33fd"}, function(err, docs){
    if(err){
      console.log('err:', err);
      return;
    }else{
      docs.name = "Jame";
      docs.save();
      console.log('result:', docs);
    }
  });
  // db remove
  Book.findOne({_id:"5672d5bb46b1a0eb11291d90"}, function(err, docs){
    if(err){
      console.log('err:', err);
      return;
    }
    if(docs){
      docs.remove(function(err){
        console.log('remove status:', err ? 'failed' : 'success');
      });
    }
  });*/
  // db update
  var cond = {
    $or: [
      {_id: '5672d66fa5e9edec12067a1d'},
      {name: 'Jame'}
    ]
  }
  Book.find(cond, function(err, docs){
    if(err){
      console.log('err:', err);
      return;
    }
    if(docs){
      for(var i in docs){
        docs[i].age = 29;
        docs[i].save();
      }
    }
  });
});   

// mongoose.connect('mongodb://127.0.0.1:10000/foo');
mongoose.connect('mongodb://127.0.0.1/foo');

router.get('/',
  function *(next) {
  	console.log('d1');
  	this.body = JSON.stringify('hello mongo');
  	yield next;
  },
  
  function *(next) {
    console.log('d2');
    yield next;
  }
);

// app.use(cors());
app.use(router.routes());

app.listen(3000);
console.log('start');
