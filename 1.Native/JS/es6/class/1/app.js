/* ex5 构造函数 转 ex6 class */

'use strict';
class Parent {
  constructor(argumentA, argumentB){
    this.propertyA = argumentA;
    this.propertyB = '这里是父类的构造属性B：' + argumentB;
    this.propertyC = function(){
      return '这里是父类的构造方法C';
    }
  }

  // this.propertyD = '这里是父类的原型属性D';

  propertyE(){
    return '这里是父类的原型方法E';
  }
}

Parent.prototype.propertyD = '这里是父类的原型属性D';

class Child extends Parent {
  constructor(argumentA, argumentB, argumentC){
    super(argumentA, argumentB); // 调用父类的constructor(argumentA, argumentB)
    this.propertyH = '这里是子类的构造属性H：' + argumentC;
    this.propertyI = function(){
        return '这里是子类的构造方法I';
    }
  }

  propertyK(){
    return '这里是子类的原型方法K：' + this.propertyA;
  }
}

Child.prototype.propertyJ = '这里是子类的原型属性J';

let fooObject = new Child('参数A', '参数B', '参数C');

console.log(fooObject.propertyA); // 参数A
console.log(fooObject.propertyB);// 这里是父类的构造属性B：参数B
console.log(fooObject.propertyC()); // 这里是父类的构造方法C
console.log(fooObject.propertyD); // 这里是父类的原型属性D
console.log(fooObject.propertyE()); // 这里是父类的原型方法E
console.log(fooObject.propertyH); // 这里是子类的构造属性H：参数C
console.log(fooObject.propertyI()); // 这里是子类的构造方法I
console.log(fooObject.propertyJ); // 这里是子类的原型属性J
console.log(fooObject.propertyK()); // 这里是子类的原型方法K
