# 字符串
## 转义
### escape
```javascript
var foo = _.escape('<script>');
console.log(foo); // => '&lt;script&gt;'
```

### unescape
```javascript
var foo = _.unescape('&lt;script&gt;');
console.log(foo); // => '<script>'
```

### truncate
```javascript
var foo = _.truncate('hello world', {
  'length': 3+5
});
console.log(foo); // => 'hello...'
```

### parseInt
```javascript
var foo = _.parseInt('08');
console.log(foo); // => 8
```

## 格式
### camelCase
```javascript
_.camelCase('Foo Bar');
// => 'fooBar'
_.camelCase('--foo-bar');
// => 'fooBar'
_.camelCase('__foo_bar__');
// => 'fooBar'
```

### snakeCase
```javascript
_.snakeCase('Foo Bar');
// => 'foo_bar'
_.snakeCase('fooBar');
// => 'foo_bar'
_.snakeCase('--foo-bar');
// => 'foo_bar'
```

### kebabCase
```javascript
_.kebabCase('Foo Bar');
// => 'foo-bar'
_.kebabCase('fooBar');
// => 'foo-bar'
_.kebabCase('__foo_bar__');
// => 'foo-bar'
```

### startCase
```javascript
_.startCase('--foo-bar');
// => 'Foo Bar'
_.startCase('fooBar');
// => 'Foo Bar'
_.startCase('__foo_bar__');
// => 'Foo Bar'
```

### capitalize
```javascript
_.capitalize('loDash');
// => 'Lodash'
```

### lowerFirst
```javascript
_.lowerFirst('JQuery');
// => 'jQuery'
```

### upperFirst
```javascript
_.upperFirst('javaScript');
// => 'JavaScript'
```

## 填充
### padStart
```javascript
var foo = _.padStart('abc', 6, '_-');
console.log(foo); // => '_-_abc'
```

### padEnd
```javascript
var foo = _.padEnd('abc', 6, '_-');
console.log(foo); // => 'abc_-_'
```

## 移除
### trimStart
```javascript
var foo = _.trimStart('_-_abc', '_-');
console.log(foo); // => 'abc'
```

### trimEnd
```javascript
var foo = _.trimEnd('abc_-_', '-_');
console.log(foo); // => 'abc'
```