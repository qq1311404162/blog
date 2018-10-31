prototype：所有函数都有的内置属性（除了Function.prototype.bind()，该属性指向原型）

`__proto__`：所有对象都有的属性，指向创建该对象的构造函数的prototype属性（实际上这个属性是指向了对象的[[prototype]]内置属性，只是这个属性外部无法访问所以使用`__proto__`来访问）

总结
* Object 是所有对象的爸爸，所有对象都可以通过 __proto__ 找到它
* Function 是所有函数的爸爸，所有函数都可以通过 __proto__ 找到它
* Function.prototype 和 Object.prototype 是两个特殊的对象，他们由引擎来创建
* 除了以上两个特殊对象，其他对象都是通过构造器 new 出来的
* 函数的 prototype 是一个对象，也就是原型
* 对象的 __proto__ 指向原型， __proto__ 将对象和原型连接起来组成了原型链