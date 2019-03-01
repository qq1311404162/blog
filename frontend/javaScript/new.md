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