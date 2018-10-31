### 闭包的含义
有权访问另一个函数作用域的变量的函数
### 闭包的本质
基于词法作用域书写代码时产生的自然结果。

先来看一段代码
```
function foo(){
    var a = 2;
    function bar(){
        console.log(a); // 2
    }
    bar();
}
foo()
```