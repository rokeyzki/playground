# 函数
## 参数控制
### ary
```javascript
function foo() {
  _.map(arguments, function(v){
    console.log(v);
  })
}
foo(1, 2, 3, 4, 5, 6); // => 1, 2, 3, 4, 5, 6
var fooAry = _.ary(foo2, 3);
fooAry(1, 2, 3, 4, 5, 6); // => 1, 2, 3
```

### flip
```javascript
function foo() {
  _.map(arguments, function(v){
    console.log(v);
  })
}
foo(1, 2, 3, 4, 5, 6); // => 1, 2, 3, 4, 5, 6
var fooFlip = _.flip(foo); // 创建一个翻转接收参数的函数
fooFlip(6, 5, 4, 3, 2, 1); // => 1, 2, 3, 4, 5, 6
```

### partial
```javascript
function foo(x, y){
  return `${x} ${y}`;
}
var fooPartial = _.partial(foo, 'hello');
console.log(fooPartial('world')); // hello world
var fooPartial = _.partial(foo, _, 'hello'); // 使用_占位符
console.log(fooPartial('world')); // world hello
```

### overArgs
```javascript
function doubled(n) {
  return n * 2;
}
function square(n) {
  return n * n;
}
var fooOverArgs = _.overArgs(function(x, y) {
  return `square：${x}、doubled：${y}`;
}, square, doubled);
console.log(fooOverArgs(3, 4)); // => square：9、doubled：8
```

## 次数控制
### once
```javascript
function foo(type, x){
  return `${type}:${x}`;
}
var fooOnce = _.once(foo);
console.log(fooOnce('once', 1)); // => once:1
console.log(fooOnce('once', 2)); // => once:1
console.log(fooOnce('once', 3)); // => once:1
console.log(fooOnce('once', 4)); // => once:1
console.log(fooOnce('once', 5)); // => once:1
```

### before
```javascript
function foo(type, x){
  return `${type}:${x}`;
}
var fooBefore = _.before(3, foo);
console.log(fooBefore('before', 1)); // => before:1
console.log(fooBefore('before', 2)); // => before:2
console.log(fooBefore('before', 3)); // => before:2
console.log(fooBefore('before', 4)); // => before:2
console.log(fooBefore('before', 5)); // => before:2
```

### after
```javascript
function foo(type, x){
  return `${type}:${x}`;
}
var fooAfter = _.after(3, foo);
console.log(fooAfter('after', 1)); // => undefined
console.log(fooAfter('after', 2)); // => undefined
console.log(fooAfter('after', 3)); // => after:3
console.log(fooAfter('after', 4)); // => after:4
console.log(fooAfter('after', 5)); // => after:5
```

## 时间控制
### delay
```javascript
function foo(x){
  alert(x);
}
_.delay(foo, 3000, '1'); // 延迟3000毫秒后执行
_.delay(foo, 2000, '2'); // 前一个delay执行完后，再延迟2000毫秒后执行
_.delay(foo, 1000, '3'); // 前两个delay执行完后，再延迟1000毫秒后执行
```

### debounce
```javascript
function foo(x){
  alert(x);
}
var fooDebounce = _.debounce(foo, 3000);
fooDebounce('test'); // 延迟3000毫秒后执行，并且接下去3000毫秒内不再执行相同函数
fooDebounce('test'); // 不执行
fooDebounce('test'); // 不执行
fooDebounce('test'); // 不执行
fooDebounce('test'); // 不执行
```

### throttle
```javascript
function foo(x){
  alert(x);
}
var fooThrottle = _.throttle(foo, 3000, { 'trailing': false }); // 一定要添加参数{ 'trailing': false }
fooThrottle('test'); // 立即执行，并且接下去3000毫秒内不再执行相同函数
fooThrottle('test'); // 不执行
fooThrottle('test'); // 不执行
fooThrottle('test'); // 不执行
fooThrottle('test'); // 不执行
```

## 结果控制
### memoize
```javascript
function foo(sign){
  var date = new Date();
  return `${sign}: ${date.getTime()}`;
}
var fooMemoize = _.memoize(foo);
console.log(fooMemoize(1)); // => 1: 1476798452391
console.log(fooMemoize.cache.get(1)) // 1: 1476798452391（查看参数为1时的函数缓存）
_.delay(function(){
  console.log(fooMemoize(1)); // => 1: 1476798452391（函数结果缓存）
  fooMemoize.cache.delete(1); // 清除参数为1时的函数缓存
  console.log(fooMemoize(1)); // => 1: 1476798455395（生成新的函数缓存）
}, 3000);
```