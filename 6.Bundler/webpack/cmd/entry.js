require("./style.css");

require('./mod-b');

// require('jquery');
var foo = ['red', 'blue', 'green', 'yellow'];
var status = $.inArray('green', foo);
console.log(status);

// 执行 webpack
// or 执行 webpack --progress --colors （可查看进度以及颜色）
