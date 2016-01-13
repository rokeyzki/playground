var ChildClass = function(argumentA, argumentB, argumentC){
  ParentClass.call(this, argumentA, argumentB); // 子类调用父类构造函数
  this.propertyH = '这里是子类的构造属性H：' + argumentC;
  this.propertyI = function(){
    return '这里是子类的构造方法I';
  }
}
ChildClass.prototype = Object.create(ParentClass.prototype); // 子类的原型指向父类的原型
ChildClass.prototype.constructor = ChildClass; // 子类的原型的构造函数指向自己
// 以下为子类原型的属性设置：
ChildClass.prototype.propertyJ = '这里是子类的原型属性J';
ChildClass.prototype.propertyK = function(){
  return '这里是子类的原型方法K';
}
