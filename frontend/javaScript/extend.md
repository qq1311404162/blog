平常的继承方式以及问题

1. Son.prototype = Super.prototype;
    * 直接将父类的原型赋值给子类，当子类的 prototype 中修改属性，也会将属性影响到父类的 prototype 中，其实就相当于引用赋值
2. Son,prototype = new Super();
    * 将父类的对象关联到子类的 prototype 中，如果父类中有一些副作用，也会影响到子类以及它的后代
3. Son.prototype = Object.create(Super.prototype)
4. class Son extends Super ...（es6）


newObj = Object.create(obj) // 将 obj 赋值给 newObj 的 `__proto__` 属性