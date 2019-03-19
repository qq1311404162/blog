## 数据结构
* 原始(Primitive)类型：Boolean，String，Number，null，undefined，Symbol
* 引用类型：Object

**String、Number、Boolean 类型的值在定义时，JS 引擎自动创建一个对应的对象副本，使用函数时会自动使用这个副本进行调用**
### typeof null === object 
由于 JS 的最初版本使用的是 32 位系统，其中 000 开头代表对象，而 null 全部为 0，所以会错误的判断为 object

### 函数传参
原始类型中存储的都是值，引用类型中存储的是指向具体地址的指针

函数参数传入值类型，参数是对象时，修改参数的值，外面的对象值也会改变
## 类型判断
* typeof
* instanceof
* constructor
* toString

### typeof
是一个操作符，右侧跟一个一元表达式，并返回表达式的数据类型，返回的结果用该类型的小写字母表示
* null -> object
* 其余基本类型 -> 返回正确类型
* function -> function
* 其余引用类型 -> object
### instanceof
A instanceof B：用来判断 A 是否为 B 的实例，返回 true or false。instanceof 检测的是原型，所以只能用来判断两个对象是否属于实例关系，不能直接判断一个实例属于哪种类型。
### constructor
constructor 属性会指向生成此实例的构造函数

* null 和 undefined 是无效对象，没有 constructor 属性
* 自定义对象被重写 prototype 后，原有的 constructor 引用会丢失，默认指向 Object
### toString()
toString() 是Object 的原型方法，调用该方法，默认返回当前对象的[[Class]]，其格式为 [Object Xxx]，Xxx 是对象的具体类型

除了 Object 外，其他类型需要使用 apply/call 来调用才能返回正确的类型

`Object.prototype.toSting.call(null) === [Object Null]`
 ## 类型转换
 JS 中类型转换只有 3 中情况，分别是
 * 转换为 Boolean
 * 转换为 Number
 * 转换为 String
 ### 转换为 Boolean
 除了 undefined、null、false、NaN、''、0、-0 外，其他都是 true
 ### 转换为 Number
 * undefined：NaN
 * null：0
 * Boolean： true -> 1; false -> 0
 * 字符串：纯数字字符串转为相应数字，空字符串转为 0，否则一律为 NaN
 * 数组、对象：首先转换 toPrimitive，然后根据转换后的值按照上面的规则处理
 ### 转换为 String
 * null、undefined、Boolean、数字：直接用引号包裹为字符串
 * 数组：将所有元素通过逗号连接起来，其中的 null 和 undefined 当做空字符串处理。相当于 Array.prototype.join()
 * 普通对象：相当于直接调用 Object.prototype.toString() 方法
### toPrimitive
对象转换为原始类型时
1. 先查找 valueOf 方法，如果返回原始类型，使用返回值作为结果
2. 再查找 toSting 方法，入股返回原始类型，使用返回值作为结果
3. 如果上面两个都没有返回原始类型，则抛出异常

数组的 valueOf() 值依然是数组，toString() 值为使用逗号拼接的字符串
对象的 valueOf() 值依然是对象。toString() 值为'[Object Object]'

## 宽松相等(==) 比较
**NaN 和任何值都不相等，包括它自己**

== 两边类型相同时，会直接比较两边的值
### Boolean 和其他类型
只要 Boolean 参与比较，那么该 Boolean 类型首先被转换成 Number，然后再进行其他比较
### Number 和 String 比较
这两个相比较时，会先将 String 转换为 Number，然后再进行比较
### null、undefined 和其他类型比较
* null 和 undefined 之间宽松相等，即 null == unfettered
* null 和 undefined 与自身相等
* null 和 undefined 与其他值都不宽松相等
### 引用类型和原始类型比较
比较时，先将对象 toPrimitive 成原始类型，然后根据上面的规则进行比较


## 四则运算
### 加法
* 运算中有一个是 String，就会把另一个也转换成 String
* 如果有一个不是 String 或者 Numbe，就会将其转换成 String 或者 Number
### 其他运算符
只要有一方是数字，另一方就会被转换成数字

## 深浅拷贝
引用类型中存放的是地址，变量赋值时仅仅复制地址，一个改变，所有都变。通常情况下我们希望两个对象相互独立，所以引入了深浅拷贝
### 浅拷贝
浅拷贝只能拷贝对象的值属性，如果值属性是对象，则拷贝的是地址，修改还是会改变原来的值

* Object.assign
* 展开运算符(...)

### 深拷贝
拷贝之后的对象修改，之前的对象不会受影响

使用 JSON.parse(JSON.stringfy(object)) 进行深拷贝，但是该方法具有局限性
* 会忽略 undefined，Symbol 和函数
* 不能解决循环引用的对象

## 继承
### 原型链继承
将父类的实例赋给子类的原型，从而继承父类所有的属性和原型
```
function Parent() {
    this.name = 'jhon';
    setName(name) {
        this.name = name;
    }
}
Parent.prototype.getName = function() {
    console.log(this.name);
}
function Child() {

}
Child.prototype = new Parent();
```

缺点：
* 无法向父类的构造函数中传递参数
* 由于继承自一个父类，父类中引用属性值被所有实例共享
<!-- * 父类中的所有属性会被实例共享 -->
### 构造函数继承
子类中使用 call/apply 调用父类的方法
```
function Parent() {
    this.names = ['aa', 'bb'];
}
function Child() {
    Parent.call(this);

    this.getNames = function () {
        console.log(this.names);
    }
} 
```
优点：
1. 避免了引用类型的属性被所有实例共享
2. 可以在 Child 中向 Parent 传参

缺点：
* 方法都在构造函数中定义，每次创建实例都会创建一遍方法
### 组合继承
原型链继承和构造函数继承集合，融合了两个继承的优点，是 JS 中最常用的继承模式
```
function Parent(name) {
    this.name = 'john';
}
Parent.prototype.getName = function() {
    console.log(this.name);
}
function Child(name, age) {
    Parent.call(this, name);
    this.age = age;
}
Child.prototype = new Parent();
```
缺点：
* 会调用两次父类的构造函数
### 原型式继承
直接使用 Object.assign() 方法，创建一个构造函数，将传入的对象作为创建对象的原型。其实就是 Object.assign() 的模拟实现
```
function createObj(object) {
    function F() {}
    F.prototype = object;
    return new F();
}
```
缺点：
* 由于继承自同一个父类，弗雷中引用属性值被所有实例共享
### 寄生式继承
创建一个仅用于封装继承过程的函数，在内部以某种形式来做增强对象，最后返回对象
```
function createObj(object) {
    let clone = Object.create(object);
    clone.sayName = function () {
        console.log('hi');
    }
    return clone;
}
```
缺点：
* 每次创建对象时，都会创建一遍方法
### 寄生组合式继承
被认为是最理想的继承方式
```
function createObj(object) {
    function F() {}
    F.prototype = object;
    return new F();
}
function prototype(child, parent) {
    let prototype = createObj(parent.prototype);
    prototype.constructor = child;
    child.prototype = prototype;
}
prototype(Child, Parent)
```
## 模块化
模块化大大提高了项目的可维护、可扩展和可协作性
### 分类
* ES6：import/export
* commonJS：require/exports/module.exports
* amd：require/defined
### commonJS 的 require 与 ES6 的 import 区别
* require 支持动态导入，即 require(${path}/xx.js)，而 import 不支持
* require 是同步导入，因为用于服务端，文件都在本地，即使卡主主线程也影响不大。import 是异步导入，因为用户浏览器，需要下载文件，如果同步导入会对渲染有很大影响
* require 是值拷贝，就算导出值变了，导入值也不会改变，所以更新必须重新导入一次。import 是引用拷贝，采用实施绑定，导入导出的值都指向同一个地址
## 防抖
当持续触发事件时，一定时间段内没有再次触发事件，事件函数才会执行一次，否则就重新开始延时
```
function debounce(fn, wait, immediate) {
    let timer = null;       // 设置定时器

    return function () {
        // 没有定时器时，立即执行
        if (immediate && !timer) {
            fn.apply(this, arguments);
        }
        if (timer) clearTimeout(timer);     // 有定时器就清空定时器
        // 重新放入事件循环
        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, wait);
    };
}
```
## 节流
每隔一段时间后执行一次，降低调用频率，将高频操作化成低频操作，通常用于滚动条事件或 resize 事件
```
function throttle(fn, wait, immediate) {
    let timer = null;           // 设置定时器
    let callNow = immediate;    // 是否立即执行

    return function () {
        // 立即执行
        if (callNow) {
            fn.apply(this, arguments);
            callNow = false;    // 设置为 false，防止下一次触发时立即执行
        }
        // 没有添加定时函数时，放入事件循环
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(this, arguments);
                // 销毁，防止内存常驻
                timer = null;
            }, wait);
        }
    }
}
```
## this
谁运行了函数，this 就指向谁

改变 this 指向的方式
* apply/call/bind
* new

多个 bind 方法，this 指向第一个被放入的对象
### 箭头函数与一般函数的区别
* 匿名函数，不能使用 new
* 没有 arguments 属性，参数可以通过 ... 获取
* 不绑定 this
* 没有原型
* 不能当做 Generator 函数，不能使用 yield 关键字
## 循环
### while 循环
while 循环先判断条件，为 true 时就执行
### do-while 循环
do-while 先执行一次，然后判断条件，为 true 时循环执行
### for 循环
常用 for 循环
### for-in 循环
该循环主要用于遍历对象，格式为 for (key in obj){}，key 代表对象中每个值的键，需要用 object[key] 获取值

该循环能遍历到原型链中的属性，所以一般要用 hasOwmProperty() 判断是否为自身的属性

**for-in 不适合遍历数组**
### for-of 循环
ES6 新增循环。作为遍历所有数据结构的统一方法

一个数据结构只要部署了 Symbol.iterator 属性，就被视为具有 iterator 接口，就可以用 for-of 遍历，for-of 循环调用的是数据结构的 Symbol.iterator 方法

for-of 可以使用范围包括数组、Set、Map、类似数组的对象、Generator、字符串

可以与 break、continue 和 return 配合使用

**for-of 无法遍历对象**
### forEach
ES5 新增的，数组原型中自带方法，主要用来遍历数组，实际性能比 for 还弱
### map 遍历
ES5 新增的，数组原型中的自带方法，循环遍历数组中的每一项，将每个元素变换后 return 到新数组中
### filter
遍历数组时，将返回值为 true 的元素放入新数组中
### reduce
将数组中的元素，通过回调函数最终转换为一个值
### break
跳出本次循环，继续执行循环后面的语句
### continue
跳过本轮循环剩余的代码，继续执行下一次循环
## ES6
### 解构赋值
按照一定模式，从数组和对象中提取值赋值,例如
```
let [a, b, c] = ['a', 'b', 'c'];
a  // 'a'
```
### 扩展运算符
将数组转换为用逗号分隔的参数序列
```
console.log(...[1, 2, 3, 4, 5]);
```
### Set
新的数据结构，类似于数组，但是每个成员都是唯一的
### Map
新的数据结构，类似于对象，但其中键可以为任何类型的值
### Proxy
在目标对象之前假设一层拦截，外界对对象的访问都必须先通过这层拦截
### Reflect
将 Object 对象的一些明显属于语言内部的方法，放到 Reflect 对象上
## babel 编译原理
1. babylon 将 ES6/7 的代码解析成 AST
2. babel-traverse 对 AST 进行遍历转译，得到新的 AST
3. 新 AST 通过 babel-generator 转换成 ES5
## 函数柯里化
在一个函数中，首先填充几个参数，然后再返回一个新的函数，被称为函数的柯里化


## JS 引擎工作原理
JS 引擎在进入一段可执行的代码时，引擎会创建一个**全局对象**，然后会构建一个**执行栈**。之后会自动创建一个全局执行上下文，遇到函数执行时，会创建并进入函数执行上下文。

每创建一个执行上下文时，JS 引擎会将其放入执行栈(先入后出)的顶部，每当函数执行完毕，JS 引擎会将其执行上下文从执行栈中弹出。

JS 引擎待执行上下文入栈后，便开始执行其内部的代码

##### 创建执行上下文
js 引擎创建执行上下文有三个过程
* 作用域链
* 变量对象
* this 绑定

##### 作用域链
<!-- 用于标识符解析，当执行环境被创建时，作用域链就初始化为当前运行函数的scope所包含的对象 -->
JS 引擎查找变量时，会根据作用域链一层层查找变量是否存在。
###### 词法作用域
又叫静态作用域，即作用域在定义的时候就决定，与调用地点无关。JS 采用的就是词法作用域
```
var value = 1;
function foo() {
    console.log(value);
}
function bar() {
    var value = 2;
    foo();
}
bar(); // 输出 1
```
###### 函数创建
函数有个内部属性 [[scope]]，当函数创建时，会将**当前执行上下文的活动对象**保存到这个属性中
###### 函数激活
即创建函数上下文时，初始化作用域链，将[[scope]]属性的值放入作用域链中

##### 变量对象
变量对象是当前执行上下文相关的数据作用域，存储了该上下文中定义的变量和函数声明

当变量对象创建完毕后，会被推入作用域链的顶端

在定义函数时，会将当前活动对象的值指向函数的[[scope]]属性

###### 全局变量对象
当 JS 引擎创建一个全局执行上下文时，会自动创建一个全局变量对象，并将其指向全局对象。该变量对象中不仅包含了全局对象的原有属性，还包含了定义在全局执行上下文中的变量和函数

###### 函数变量对象
函数执行上下文的变量对象，除了该上下文中定义的变量和函数外，还包括了函数的形参，arguments 对象

##### this 绑定
将 this 绑定到变量对象上？？？




#####  代码执行
js 引擎顺序执行代码，根据代码修改变量对象的值。当遇到执行函数时，创建新的函数执行上下文


## 闭包
父函数被销毁的情况下，返回的子函数仍然能访问父级函数中定义的变量

##### 产生原因
由于函数定义时，会将当前执行上下文的活动对象放入内部属性[[scope]]中。在父函数执行上下文出栈时，由于返回的子函数中引用了其变量对象，所以 JS 引擎并不会回收这个对象，会一直保存在内存中等待被子函数访问

#### 闭包应用
* 模拟块级作用域。由于 js 中所有变量在当前上下文中共享，可以使用闭包模拟一个块级作用域，使之成为自己的上下文属性
* 使用函数参数作为变量参数，避免默认[[scope]]属性向上查找
<!-- **基于词法作用域书写代码产生的自然结果** -->


## call,apply,bind
call,apply,bind 是 Function 对象自带的三个方法，三个方法主要功能相同，为**改变函数中 this 的指向**，区别在于使用方式不同

#### call(obj [, args...])
call 方法，第一个参数为调用函数中 this 需要指向的对象；args... 为需要传入的函数参数

#### apply(obj [, args[]])
apply 方法，第一个参数为调动函数中 this 需要指向的对象；args[] 数组为需要传入的参数

#### bind(obj [, args...])
bing 方法是 ES5 中新增的方法，第一个参数为调用函数中 this 需要指向的对象；args... 为需要传入的函数参数

**bind执行后返回一个函数，并非自动执行。并且 bind 方法绑定的对象，无法通过 call,apply 来再次改变**

#### 传入对象取值
* 不传，null，undefined     --> this 指向 window 对象
* 另一个函数的函数名          --> this 指向这个函数的引用
* 一个对象                  --> this 指向这个对象
* 基础类型                  --> this 指向其包装对象


**new**一个对象的过程
1. 生成一个新对象
2. 链接到原型
3. 用 call 绑定 this
4. 返回新对象（如果构造函数有自己 return，返回该值）
```
// 手动实现一个 new
function create(Super) {
    // 1. 创建一个空对象
    let obj = new Object();
    // 2. 设置原型链
    obj.__proto__ = Super.prototype;
    // 3. 绑定 this
    let result = Super.call(obj);
    // 返回
    return typeof result === 'object' ? result : obj;
}
```

## 原型及原型链
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



## 异步
### 进程与线程

##### 进程

##### 线程

### 并发与并行
##### 并发(concurrency)
**同一时间间隔内**处理多个任务，称为并发
##### 并行(parallelism)
**同一时间点同时**处理多个任务，称为并行

### Event Loop(事件循环)
JS 是门单线程语言，其本身是不能异步的，但是 JS 的宿主环境(浏览器，node)是多线程的，宿主环境通过**事件循环**，使得 JS 具备了异步的属性

JS 引擎遇到异步代码时，会将代码挂起并加入到队列中，一旦执行栈为空，事件循环就会从队列中拿出要执行的代码继续执行

##### 浏览器中的 Event Loop
* 宏任务：JS 主体代码，setTimeout，setInterval，setImmediate，I/O，UI rendering
* 微任务：Promise，process.nextTick，MutationObserver

##### 一个事件循环的执行顺序
1. 开始一个 Event Loop
2. 执行栈从 task queue 中取宏任务，并执行，执行完毕后，清空执行栈
3. 执行栈从 microtasks queue 中取微任务并执行，执行完毕后，清空执行栈
4. 判断当前队列是否还有微任务未执行，有则重复步骤 3
5. 渲染 DOM
6. 当前 Event Loop 结束
7. 从步骤 1 再次执行

**每个宏任务执行完毕后，都会查找并执行当前队列中的所有微任务**


<!-- 1. 执行 JS 主体代码(宏任务)
2. 主体代码执行完毕，执行完所有的微任务
3. 寻找一个新的宏任务执行(注意这里只执行一个宏任务，如果有多个，则要等到这个任务和这个任务包含的微任务执行完毕后，才能执行下一个宏任务)，并执行完毕
4. 执行完所有的微任务
5. 如此反复，直到停止 -->

**JS 引擎存在一个monitoring process 进程，持续不断的检查执行栈是否为空，一旦为空，就会去检查是否有等待的其他任务**

##### setTimeout 和 setInterval
* 根据执行环境的不同，最低延迟时间为1-5ms不等
* 如果之前的宏任务执行时间过长，会导致超时执行。
* setInterval 会每隔指定时间将注册的函数放入宏任务队列中

##### node 中的 Event Loop
略
http://www.php.cn/js-tutorial-408369.html


### promise
### generator
### async await


### 手写Promise