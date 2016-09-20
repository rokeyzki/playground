# 集合
## 遍历
### forEach
```javascript
_.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
  console.log(key);
});
// => Logs 'a' then 'b' (iteration order is not guaranteed).
```

### forEachRight
```javascript
_.forEachRight([1, 2], function(value) {
  console.log(value);
});
// => Logs `2` then `1`.
```

## 映射
### map
```javascript
function square(n) {
  return n * n;
}
_.map([4, 8], square);
// => [16, 64]
```

### flatMap
```javascript
function duplicate(n) {
  return [n, n];
}
_.flatMap([1, 2], duplicate);
// => [1, 1, 2, 2]
```

### flatMapDepth
```javascript
function duplicate(n) {
  return [[[n, n]]];
}
_.flatMapDepth([1, 2], duplicate, 2);
// => [[1, 1], [2, 2]]
```

### flatMapDeep
```javascript
function duplicate(n) {
  return [[[n, n]]];
}
_.flatMapDeep([1, 2], duplicate);
// => [1, 1, 2, 2]
```

## 归类
### countBy
### groupBy
### keyBy
### orderBy
### partition

## 查找
### find
```javascript
var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];
_.find(users, function(o) { return o.age < 40; });
// => object for 'barney'
_.find(users, { 'age': 1, 'active': true });
// => object for 'pebbles'
_.find(users, ['active', false]);
// => object for 'fred'
_.find(users, 'active');
// => object for 'barney'
```

### findLast
```javascript
_.findLast([1, 2, 3, 4], function(n) {
  return n % 2 == 1;
});
// => 3
```

## 过滤
### filter
```javascript
var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];
_.filter(users, function(o) { return !o.active; });
// => objects for ['fred']
_.filter(users, { 'age': 36, 'active': true });
// => objects for ['barney']
_.filter(users, ['active', false]);
// => objects for ['fred']
_.filter(users, 'active');
// => objects for ['barney']
```

### reject
```javascript
var users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred',   'age': 40, 'active': true }
];
_.reject(users, function(o) { return !o.active; });
// => objects for ['fred']
_.reject(users, { 'age': 40, 'active': true });
// => objects for ['barney']
_.reject(users, ['active', false]);
// => objects for ['fred']
_.reject(users, 'active');
// => objects for ['barney']
```

## 随机
### sample
```javascript
_.sample([1, 2, 3, 4]);
// => 2
```

### sampleSize
```javascript
_.sampleSize([1, 2, 3], 2);
// => [3, 1]
_.sampleSize([1, 2, 3], 4);
// => [2, 3, 1]
```

## 迭代
### reduce
```javascript
_.reduce([1, 2], function(sum, n) {
  return sum + n;
}, 0);
// => 3
```

### reduceRight
```javascript
var array = [[0, 1], [2, 3], [4, 5]];
_.reduceRight(array, function(flattened, other) {
  return flattened.concat(other);
}, []);
// => [4, 5, 2, 3, 0, 1]
```

## 排序
### invokeMap
### shuffle
### sortBy

## 判断
### every
```javascript
var users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred',   'age': 40, 'active': false }
];
_.every(users, { 'user': 'barney', 'active': false });
// => false
_.every(users, ['active', false]);
// => true
_.every(users, 'active');
// => false
```
### includes
### some

## 属性
### size
