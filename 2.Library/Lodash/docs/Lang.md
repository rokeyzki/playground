# 类型
## 判断
### empty
```javascript
var foo = null;
if(foo) {
  console.log('非空')
} else {
  console.log('空')
}
// => '空'
```

### boolean
```javascript
console.log(typeof true); // => 'boolean'
```

### number
```javascript
console.log(typeof 123); // => 'number'
// 判断整数
console.log(_.isInteger(1)) // => true
console.log(_.isInteger(-1)) // => true
console.log(_.isInteger(0)) // => true
console.log(_.isInteger(0.1)) // => false
```

### string
```javascript
console.log(typeof 'abc'); // => 'string'
```

### undefined
```javascript
console.log(typeof undefined); // => 'undefined'
console.log(typeof null); // => 'object'
```

### null
```javascript
console.log(_.isNull(undefined)); // false
console.log(_.isNull(null)); // true
```

### object
```javascript
console.log(typeof {}); // => 'object'
console.log(typeof []); // => 'object'
console.log(typeof new Date()); // => 'object'
// 判断空对象
var foo = {};
if(typeof foo == 'object' && _.size(foo) == 0) console.log('空对象');
```

### array
```javascript
console.log(Array.isArray({})) // false
console.log(Array.isArray([])) // true
```

### date
```javascript
console.log(_.isDate({})) // false
console.log(_.isDate(new Date())) // true
```