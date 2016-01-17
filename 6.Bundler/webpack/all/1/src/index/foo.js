// var $ = require("jquery"); // sudo npm install jquery

var foo = ['red', 'blue', 'green', 'yellow'];
foo = $.map(foo, function(value, key) {
  return value + '(test)';
});

console.log(foo); // ["red(test)", "blue(test)", "green(test)", "yellow(test)"]