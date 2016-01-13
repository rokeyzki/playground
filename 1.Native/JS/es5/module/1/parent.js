var ParentClass = function(argumentA, argumentB){
  // 构造(constructor)属性写法：
  // 构造函数内部的属性(property)在实例化之后就不再关联影响到实例对象.
  this.propertyA = argumentA;
  this.propertyB = '这里是父类的构造属性B：' + argumentB;
  this.propertyC = function(){
    return '这里是父类的构造方法C';
  }
}
// 原型(prototype)属性写法：
// 函数原型(prototype)上的属性(property)在实例化之后就依然会实时关联影响到实例对象.
ParentClass.prototype.propertyD = '这里是父类的原型属性D';
ParentClass.prototype.propertyE = function(){
  return '这里是父类的原型方法E';
};
