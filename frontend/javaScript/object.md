### 定义对象
1. 字面量声明：例如 ` var obj = {a: 1};`
2. 构造函数：例如 `var obj = new Object();`

### 内置对象，JS 中的对象子类型
1. String
2. Number
3. Boolean
4. Object
5. Function
6. Array
7. Date
8. RegExp
9. Error

这些内置对象实际上是一些内置构造函数，用来构造一个对应子类型的新对象

### 访问对象某个属性的值
1. 属性访问：如 ` obj.a `
2. 键访问：如  ` obj['a'] `

语法区别
* 属性访问要求属性名符合标识符命名规范
* 键访问可以接收任意 Unicode 字符串作为属性名
* 键访问中的字符串可以通过表达式来计算（es6新增）

### 复制对象
1. 浅拷贝，只是拷贝了基本类型的数据，对于引用类型，拷贝后还是引用
    * Object.assign
    * ... 运算符
2. 深拷贝，完全版拷贝对象的内容，不管是否是引用类型
    * JSON.parse(JSON.stringfy(obj))
        * 会忽略 undefined
        * 不能序列化函数
        * 不能解决循环引用的对象

### 属性描述符
es5 中，新定义一个属性，都会为该属性添加 3 个特性（都为布尔值）

```
var obj = {
    a: 1,
    b: 2
}
Object.getOwnPropertyDescriptor(obj, 'a'); // 返回对象指定属性的值和特性
/*
{
    value: 1,           // 属性的值
    writable: true,     // 属性是否可修改
    enumerable: true,   // 属性是否可枚举
    configurable: true  // 属性是否可以用 defineProperty() 方法修改
}
*/
Object.defineProperty(obj, 'c', {value: 3, writable: false, enumerable: true, configurable: true}); // 为 obj 对象添加一个属性 c，其中 writable 设置为 false
obj.c = 4; // 设置属性值失败
Object.defineProperty(obj, 'c', {writable: true, enumerable: true, configurable: false}); // 将 writable 设置为 true，configurable 设置为false
obj.c = 5; // 依然可以赋值
Object.defineProperty(obj, 'c', {value: 6}); // 这样也可以
Object.defineProperty(obj, 'c', {writable: false}); // true -> false 成功
Object.defineProperty(obj, 'c', {writable: true});  // false -> true 失败
Object.defineProperty(obj, 'c', {configurable: true}); // 执行失败
delete obj.a // 执行失败
```

* value: 属性的值，默认为 unde
* writable：是否可以修改属性的值，设置为 false 后，无法修改属性的值， 默认为 true
* enumerable：该属性是否可被枚举到，如 for in，默认为 true
* configurable：是否可以用 defineProperty() 方法来修改特性和值；默认为 true
    * false 时，writable 特性可以从 true->false，但是无法从 false-> true
    * false 时，该属性无法删除

https://segmentfault.com/a/1190000011294519#articleHeader10

### getter 和 setter
当给属性定义了 getter 或 setter 方法时，JS 会忽略他们的 value 和 writable 特性

### 存在性
使用原型中的 hasOwnproperty() 方法，判断对象中是否存在这个属性，该方法不会检查对象的原型链

### 对象遍历