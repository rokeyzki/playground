/**
 * AMD的模块配置规则
 *
 * AMD规范允许对加载进行一些配置，这些配置选项不是必须的，但灵活更改配置，会给开发带来一些方便。
 * baseUrl 以字符串形式规定根目录的路径，以后在加载模块时都会以该路径为标准。
 * path 可以指定需加载模块的路径，模块名与路径以键-值对的方式写在对象中。如果一个模块有多个可选地址，可以将这些地址写在一个数组中。
 * 关于模块路径的设置项还有packages，map等。
 */
// 配置模块ID与模块加载路径
require.config({
  baseUrl: "./",
  paths: {
    /* 第三方模块 */
    "jquery": "https://cdn.bootcss.com/jquery/2.1.0/jquery.min",
    /* 自定义模块 */
    "mathA": "module/a", // 独立模块
    "mathB": "module/b", // 依赖模块
  }
});
/**
 * AMD的模块加载规则
 *
 * AMD采用require()语句加载模块，该语句接受两个参数
 * require([module], callback);
 * 第一个参数 [module]，是一个数组，里面的成员就是要加载的模块
 * 第二个参数 callback，则是加载成功之后的回调函数
 */
// 模块加载示例
require(['mathA', 'mathB', 'jquery'], function(mA, mB, $) {
  var result = mA.add(1, 3); // 在回调函数中，可以通过math变量引用模块
  console.log(result);
  var result = mB.divide(mA.minus(1, 3), mA.add(1, 3));
  console.log(result);
  var foo = ['red', 'blue', 'green', 'yellow'];
  var status = $.inArray('green', foo);
  console.log(status); // 2
});
