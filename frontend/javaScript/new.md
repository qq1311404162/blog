**new**一个对象的过程
1. 生成一个新对象
2. 链接到原型
3. 绑定 this
4. 返回新对象
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