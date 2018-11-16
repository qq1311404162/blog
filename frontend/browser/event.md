#### 事件捕获
在事件到达预定目标之前捕获它。从 document 对象开始，沿着 DOM 树依次向下，直到传播到实际目标
#### 事件冒泡
事件开始由最具体的元素接收，然后逐级传向上传播。从指定节点开始，沿着 DOM 树依次向上传播，直到 document 对象

### DOM 事件流三个阶段
1. 事件捕获阶段，可以截获事件
2. 事件处理阶段
3. 事件冒泡阶段，可以为事件作出响应

### DOM0 级事件
1. 事件注册，将事件处理函数赋值给事件对象的属性
```
    var btn = document.getElementById('btn');
    btn.onclick = function() {
        alert(this.id); // 这里的 this 指向事件对象本身
    }
```
2. 事件删除，事件对象的属性赋值为 null
```
    var btn = document.getElementById('btn');
    btn.onclick = null;
```
### DOM2 级事件
1. 事件注册，使用 addEventListener() 方法添加事件。所有的 DOM 节点都支持
```
    var btn = document.getElementById('btn');
    /**
    *   参数1：要添加的事件名
    *   参数2：事件处理函数
    *   参数3：在何阶段调用事件
    *       true    捕获阶段调用事件处理程序
    *       false   冒泡阶段调用事件处理程序，默认为 false
    **/
    btn.addEventListener('click', function(){
        alert(this.id); // 这里的 this 指向对象本身
    }, false);
```
2. 事件删除，使用 removeEventListener() 方法删除事件。所有 DOM 节点都支持
```
    var btn = document.getElementById('btn');
    var handle = function() {
        alert(this.id);
    }
    /**
    *   参数1：要删除的事件名
    *   参数2：此参数需要与事件注册时的函数相同，否则该方法不生效，所以匿名函数事件无法被删除
    *   参数3：在何阶段调用事件
    *       true    捕获阶段调用事件处理程序
    *       false   冒泡阶段调用事件处理程序， 默认为 false
    **/
    btn.addEventListener('click', handle, false);
    btn.removeEventListener('click', handle, false);
```
**一般情况下，都是将事件添加到冒泡阶段，这样可以最大限度的兼容各种浏览器**
### IE 事件处理程序
1. 事件注册，attachEvent() 方法添加事件，该方法添加的事件处理函数都会被添加到冒泡阶段
```
    var btn = document.getElementById('btn');
    /**
    *   参数1：要添加的事件名，内容为 on + 事件名称
    *   参数2：事件处理函数
    **/
    btn.attachEvent('onclick', function(){
        alert(this.a); //这里的 this 指向 window，因为 attachEvent 注册的事件运行在全局作用域中
    });
```
如果给一个对象添加了多个事件，先执行最后一个事件，最后一个执行第一个事件

2. 事件删除，detachEvent() 方法删除事件
```
    var btn = document.getElementById('btn');
    var handle = function(){
        alert(this.a); 
    }
    btn.addachEvent('onclick', handle);
    /**
    *   参数1：要删除的事件名，内容为 on + 事件名称
    *   参数2：此参数需要与事件注册时的函数相同，否则该方法不生效，所以匿名函数事件无法被删除
    **/
    btn.detachEvent('onclick', handle);
```
### 事件对象
触发 DOM 上的某个事件时，会产生一个事件对象，包含着所有与事件有关的信息
#### DOM 中的事件对象 event
DOM0 和 DOM2 中的事件函数，作为一个参数传输函数中
```
    var btn = document.getElementById('btn');
    btn.onclick = function(event){
        alert(event.type);
    }
    btn.addEventListener('click', function(event){
        alert(event.type);
    }, false);
```
event 对象只有在事件处理期间才会存在，一旦程序执行完毕，event 对象就会被销毁

#### IE 中的事件对象 event
DOM0 级处理事件时，event 作为 window 对象的一个属性存在；attachEvent 处理事件时，作为一个参数传入函数中
```
    var btn = document.getElementById('btn');
    btn.onclick = function(){
        var event = window.event;
        alert(event.type);
    }
    btn.attachEvent('onclick', function(event){
        alert(event.type);
    });
```
### DOM3 级定义的事件类型
1. UI 事件
    1. load     页面完全加载完毕后，在 window 对象上触发；所有框架都加载完毕后，在框架集上面触发
    2. unload   页面完全卸载后，在 window 对象上触发。。。
    3. abort    用户停止下载时，如果嵌入的内容没有加载完，在 object 元素上触发
    4. error    发生 JavaScript 错误时，在 window 对象上触发
    5. select   
    6. resize   窗口大小变化时，在 window 上面触发
    7. scroll   用户滚动滚动条时，该元素上触发
2. 焦点事件 页面元素获得或失去焦点时触发
    1. blur     失去焦点时，该事件不会冒泡
    2. focus    获得焦点时，该事件不会冒泡
    3. focusin  获得焦点时，与 focus 等价，但会冒泡
    4. focusout 失去焦点，与 blur 等价，但会冒泡
3. 鼠标事件
    1. click    单击鼠标按钮
    2. dbclick  双击鼠标按钮
    3. mousedown按下任意鼠标按钮
    4. mouseenter鼠标光标从元素外部首次移动到元素范围之内触发，不会冒泡，而且在移动到后代元素时不会触发
    5. mouseleave鼠标光标从元素内部首次移动到元素外部时触发，不会冒泡，而且在移动到后代元素时不会触发
    6. mousemove 鼠标在元素内部移动时触发。只要移动就会触发
    7. mouseout  鼠标光标从元素内部移动到另一个元素时触发
    8. mouseover 鼠标光标从元素外部移动到元素内部时触发
    9. mouseup   释放鼠标按钮时触发
4. 滚轮事件
5. 文本事件
6. 键盘事件
    1. keydown  按下键盘任意键
    2. keypress 按下键盘上任意字符键
    3. keyup    释放键盘键
7. 合成事件，输入法编辑器输入字符时触发
8. 变动事件，底层 DOM 结构发生变化时触发
    1. DOMSubtreeModified
    2. DOMNodeInserted
    3. DOMNodeRemoved
    4. DOMNodeInsertedIntoDocument
    5. DOMNodeRemoveFromDocument
    6. DOMAttrModified
    7. DOMCharacterDataModified
9. HTML5 事件
    1. contextmenu
    2. beforeunload
    3. DOMContentLoaded
    4. readystatechange
    5. pageshow
    6. pagehide
    7. hashchange
10. 设备事件
    1. orientationchange
    2. mozOrientation
    3. deviceorientation
    4. devicemotion
11. 触摸与手势事件
click 事件：只有 mousedown + mouseup 两个事件相继触发，才会触发 click 事件
### 事件委托