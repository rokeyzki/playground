/**
 * AMD的模块定义规则
 *
 * AMD采用define()语句定义模块，该语句接受三个参数
 * define(id?, [dependencies]?, factory);
 * 第一个参数 id，是一个可选参数，相当于模块的名字，加载器可通过id名加载对应的模块。如果没有提供id，加载器会将模块文件名作为默认id。
 * 第二个参数 dependencies，是一个可选数组参数，传入当前对象依赖的对象id，这个参数如果不填则直接忽略，不要留空
 * 第三个参数 factory，即回调函数，在依赖模块加载完成后会调用，它的参数是所有依赖模块的引用。回调函数的返回值就是当前对象的导出值。
 * 如果省去id和dependencies参数的话，就是一个完全的匿名模块，这个时候，factory的参数将为默认值require，exports和module加载器将完全通过文件路径的方式加载模块，同时如果有依赖模块的话可通过require方法加载
 */
define('mathB', ['mathA'], function(mA) { // 依赖模块示例：
  return {
    divide: function(a, b) {
      return a / mA.add(a, b);
    }
  };
});
