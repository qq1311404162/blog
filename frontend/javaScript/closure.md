### 闭包的含义
有权访问另一个函数作用域的变量的函数
### 闭包的本质
基于词法作用域书写代码时产生的自然结果。

```
var a = 1;
function foo() {
    var a = 2;
    return function(){
        console.log(a);
    }
}
var b = foo();
b(); // 2

function fun(){
    var a = 3;
    setTimeout(function(){
        console.log(a);
    }, 0);
}
fun(); // 3
```