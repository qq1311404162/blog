##
JavaScript 中，万物皆对象。大致分为两类：**普通对象(Object)** 和 **函数对象(Function)**

**函数对象的 typeof 值为 function，普通对象的 typeof 值为 object**

### 创建对象
JS 中所有的对象(null 除外)都是通过构造函数来创建的。var obj = {} 这种只是一个语法糖，真正执行的操作为 var obj = new Object();

##### 函数对象
new Function() 产生的对象都是函数对象，常见方式有
* 函数定义，如：funtion fn1() {}
* 匿名函数表达式赋值，如：var fn2 = function() {}
* Function 声明函数，如：var fn3 = new Function('x', '{console.log(x)}')

**注：函数定义和匿名函数也是一个语法糖，JS 引擎会自动通过 new Function() 的方式来创建这些函数对象**
##### 普通对象
除了函数对象外，其他方式 创建的对象都是普通对象


### prototype 
**prototype** 是每个函数对象都有的属性，被称为**函数的原型**，该属性的主要作用是继承，该函数实例化的属性，都可以访问其中的属性和方法

**Function.prototype.bind() 没有 prototype 属性**

### constructor
prototype 中的属性，该属性指向其关联的构造函数
```
function Test() {

}
console.log(Test === Test.prototype.constructor) // true
```

### `__proto__`
所有对象(除了 null)都具有的一个属性，该属性指向该对象的原型

**注：由于所有对象都是通过构造函数创建，所以每个对象的 `__proto__` 属性指向的是其构造函数的原型，即构造函数的 prototype 属性**

由于 prototype 属性也是一个对象，所以该对象也有`__proto__` 属性
* 所有对象都是从 Object 继承而来
* `Object.prototype.__proto__` === null，原型链到此终结
* `Function.prototype.__proto__` === Object.prototype
* JS 内置构造函数(Array, RegExp, Function, Object, Number, String, Boolean)的`__proto__` 指向 Function.prototype。即 `Array/RegExp/Function/Object/Number/String/Boolean.__proto__` === Function.prototype


### 原型链
通过`__proto__`互相关联的结构，称为原型链

##### 作用
对象查找属性或方法时，首先会查找自身是否具有该属性或方法，当找不到时，则会顺着`__proto__`属性一步步往上面查找，直到值为 null 时停止查找









------------------------------------------------------------------------------------------------------------

<!-- **JS 中所有对象(null 除外)都是通过构造函数来创建的**




prototype：所有函数都有的内置属性（除了Function.prototype.bind()，该属性指向原型）

`__proto__`：所有对象都有的属性，指向创建该对象的构造函数的prototype属性（实际上这个属性是指向了对象的[[prototype]]内置属性，只是这个属性外部无法访问所以使用`__proto__`来访问）

总结
* Object 是所有对象的爸爸，所有对象都可以通过 __proto__ 找到它
* Function 是所有函数的爸爸，所有函数都可以通过 __proto__ 找到它
* Function.prototype 和 Object.prototype 是两个特殊的对象，他们由引擎来创建
* 除了以上两个特殊对象，其他对象都是通过构造器 new 出来的
* 函数的 prototype 是一个对象，也就是原型
* 对象的 __proto__ 指向原型， __proto__ 将对象和原型连接起来组成了原型链 -->