### **this 永远指向最后调用它的那个对象**


#### 隐式绑定
```
function foo(){
	console.log(this.a)
}

var a = 3;

var obj = {
	a: 2,
	foo: foo
};

obj.foo(); // 2。因为这里是 obj 调用的 foo，所以 this 指向 obj
```
#### 隐式丢失
```
var a = 1;
var obj = {
	a: 2,
	foo: function(){
        setTimeout(function(){
            console.log(this.a);
        }, 1000);
    }
};
obj.foo(); // 1。匿名函数的执行对象永远是全局对象
```
#### 硬绑定
* call、apply 调用一个方法，并以第一个参数作为方法中 this 的指向。
    * call 第二个参数开始，传入参数列表
    * apply 第二次参数是参数数组
* bind 调用一个方法，并以第一个参数作为方法中 this 的指向，第二次参数开始，传入参数列表。该方法返回一个函数，立即执行需要在后面添加() es5 中扩展的方法
```
function foo( something ) {
    console.log( this.a, something)
    return this.a + something
}

var obj = {
    a: 2
}

var bar = function() {
    return foo.apply( obj, arguments)
}

var b = bar(3); // 2 3
console.log(b); // 5
foo(3); // undefined 3 NaN  全局对象中没有变量 a，所以第一个是 undefined
```
#### new 绑定
使用 new 来调用构造函数时，将 this 绑定到新创建的对象中


## this 绑定的优先级
1. 使用 new 初始化
2. 由 call、apply、bind 调用绑定
3. 上下文对象调用
4. 默认调用全局对象