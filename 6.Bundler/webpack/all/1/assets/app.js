!function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){r(1),r(4),r(5),r(2),r(3)},function(e,t){var r=["red","blue","green","yellow"];r=$.map(r,function(e,t){return e+"(test)"}),console.log(r)},function(e,t){"use strict";function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var p=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),u=function(){function e(t,r){n(this,e),this.propertyA=t,this.propertyB="这里是父类的构造属性B："+r,this.propertyC=function(){return"这里是父类的构造方法C"}}return p(e,[{key:"propertyE",value:function(){return"这里是父类的原型方法E"}}]),e}();u.prototype.propertyD="这里是父类的原型属性D";var c=function(e){function t(e,o,p){n(this,t);var u=r(this,Object.getPrototypeOf(t).call(this,e,o));return u.propertyH="这里是子类的构造属性H："+p,u.propertyI=function(){return"这里是子类的构造方法I"},u}return o(t,e),p(t,[{key:"propertyK",value:function(){return"这里是子类的原型方法K："+this.propertyA}}]),t}(u);c.prototype.propertyJ="这里是子类的原型属性J";var i=new c("参数A","参数B","参数C");console.log(i.propertyA),console.log(i.propertyB),console.log(i.propertyC()),console.log(i.propertyD),console.log(i.propertyE()),console.log(i.propertyH),console.log(i.propertyI()),console.log(i.propertyJ),console.log(i.propertyK())},function(e,t){var r,o,n,p,u;for(u=[1,2,3,4],r=n=0,p=u.length;p>n;r=++n)o=u[r],alert("当前数字是 "+r+", 当前索引是 "+o)},function(e,t){},function(e,t){}]);