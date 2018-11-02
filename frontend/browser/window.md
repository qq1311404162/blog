### BOM
BOM(Browser Object Model) 浏览器对象模型，描述与浏览器进行交互的方法和接口

由于各个浏览器提供商会按照自己的想法扩展它，使得 BOM 缺乏一种规范，于是浏览器之间共有的对象成为了事实上的标准

### window
window 对象是 BOM 的核心对象，**表示浏览器的一个实例**。它既是通过 JavaScript 访问 浏览器窗口的一个接口，又是 ECMAScript 规定的全局对象。

##### 所有全局作用域中声明的变量、函数都会变成 window 对象的属性和方法

##### 页面中包含 frame 框架，则每个框架都有自己的 window 对象，并保存在 frames 属性中
top 属性始终指向最外层的框架，也就是浏览器窗口

parent 属性，指向当前框架的父框架，没有父框架时，相当于 top 属性

窗口位置 screenXxx 属性

窗口大小 xxxWidth/xxxHeight 属性

打开窗口 open() 方法

定时器 setTimeout()/setInterval()

系统对话框 alert()/confirm()/prompt() 方法

location 属性，提供与当前窗口中加载的文档有关的信息。既是 window 的属性，也是 document 的属性

navigator 属性，识别客户端浏览器

history 属性，保存用户上网的历史记录