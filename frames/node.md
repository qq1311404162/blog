# node 简介
node 是一个能脱离浏览器并且运行在操作系统中的一个 JavaScript 框架，使用 Google V8引擎解析 JavaScript 语言。
#### node 相比于其他语言框架的优点
1. 事件机制
2. 异步I/O

# node 基础知识

#### 控制台
node 中使用 console 对象向控制台输出内容。与浏览器中的 console 对象基本相同
###### console.log()/console.info()，向控制台中显示一行字符串
###### console.error()，向控制台中输出一行错误信息
###### console.dir()，查看一个对象的内容，并显示到控制台
###### console.time() + console.timeEnd()，统计一段代码的执行时间，两个方法的参数必须一致
###### console.trace()，将当前位置处的栈信息作为错误输出到控制台
###### console.assert()，对一个表达式进行评估，结果为 false 时则输出表达式详情并抛出 AssertionError 异常

#### 全局对象和全局函数
global 对象为 node 中的全局对象，代表 node 中的全局命名空间，任何全局变量、函数或对象都是该对象的属性
##### 常用全局函数
###### setTimeout() 与 clearTimeout()
###### setInterval() 与 clearInterval()
###### 定时器对象的 unref() 和 ref()
###### require() 加载模块，参数名可以是带有完整路径的模块文件名，也可以是模块名
加载模块时会运行模块中的每一行代码，并在首次加载后缓存在内存缓冲区中，多次引用的都是同一个模块对象
###### require.resolve() 查询完整模块名
###### require.cache 代表已经被加载模块的缓冲区
###### __firename 获取当前模块文件名
###### __dirname 获取当前目录名

#### 事件处理机制
node 中定义了 EventEmitter 类，所有事件处理函数的绑定和解除都定义在这个类中。任何继承了这个类的对象都可以处理事件
##### 事件方法
* addListener(event, func) 与 on(event, func) 绑定指定事件处理函数
* once(event, func) 绑定只运行一次的指定事件处理函数
* removeListener(event, func) 移除指定事件处理函数，与浏览器中相同，移除事件的函数必须与绑定时的函数是同一个，否则无法移除
* removeAllListeners([event]) 移除所有事件(指定事件)的所有事件处理函数
* setMaxListeners(n) 指定事件处理函数的最大数量
* listeners(event) 获取指定事件的所有事件处理函数
* emit(event[, arg1][, atg2][...]) 手工触发指定事件

一个事件的多个事件函数会依次执行，默认情况下，同一事件最多可以绑定 10 个处理函数

##### EventEmitter 类自身拥有的方法
* listenerCount(obj, event) 获取某个对象的指定事件处理函数的数量。

##### EventEmitter 类自身拥有的事件
* newListener 事件，任何继承了 EventEmitter 类的子类对象绑定了事件处理函数时，都会触发
* removeListener 事件，任何继承了 EventEmitter 类的子类对象移除了事件处理函数时，都会触发

#### 调试
使用 node debug filename 启动调试器

node-inspector 调试工具

# node 模块与 npm 包管理工具
node 中以模块为单位划分所有功能，每一个模块都是一个 JavaScript 脚本文件。

模块允许用户将第三方类库引入到应用中。
#### 模块文件类型
* 后缀名为 .js 的文件
* 后缀名为 .json 的文件
* 后缀名为 .node 的经过编译后的二进制模块文件
#### 加载模块 require() 方法

#### 外部访问模块
1. exports 对象到处内部对象或方法等
2. module.exports 到处内部对象（当模块定义为一个类时，必须使用此方法导出）

#### 组织与管理模块
1. node_modules 目录加载模块：当加载模块不指定路径时，node 将从此目录中寻找模块
2. 目录管理模块
    * 加载模块名为目录名时，将自动加载目录内部的 index.js 文件
    * 加载模块名为目录名时，目录内部创建 package.json 文件，可以自定义自动加载的文件名
3.  全局目录中加载模块：当模块不指定路径时，node_modules 中找不到相应的模块，node 将从系统的环境变量目录中寻找此模块

模块对象的属性
* module.id：当前模块的id
* module.filename：当前模块的文件名
* module.loaded：模块是否加载完毕
* module.parent：当前模块的父模块对象
* module.children：数组，当前模块的所有子模块（当前已加载的所有模块）

### 包与 npm 包管理工具
node 中可以通过包来对一组有相互依赖关系的模块进行统一管理。通过包将独立的功能封装起来

##### node 中包事实上是一个目录，通常包含
1. package.json 文件
2. bin 目录存放二进制文件
3. lib 目录存放 JavaScript 文件
4. doc 目录存放说明文档
5. test 目录存放单元测试文件

###### package.json 文件包含字段
1. name 包名。包名唯一
2. perferglobal 是否支持全局安装
3. description 包说明
4. version 版本号
5. author 包作者信息
6. maintainers 包维护者信息组
7. bugs bug 提交地址
8. licenses 许可证数组
9. repository 仓库托管地址数组
10. keywords 关键字数组
11. dependencies 本包所依赖的包，关联数组，由包名和版本号组成

#### npm 包管理工具
node 提供的工具，可用于从第三方网站上下载各种 node 包
##### npm 常用命令
* npm search xxx     在仓库中搜索 xxx 包
* npm view xxx       查看 xxx 包所用 package.json 信息
* npm install xxx   安装 xxx 包到当前窗口下的 node_modules 目录中
* npm root          查看 npm 包的安装路径
* npm conf set prefix dir    修改 npm 包的安装路径
* npm list          查看当前目录下所有安装的包
* npm uninstall xxx 卸载 xxx 包
* npm update xxx    更新 xxx 包
* npm update        更新所有的包
* -g        全局安装 node 包
* --save    将包安装到本地，并且在 package.json 中的 dependencies 中添加依赖
* --save-dev将包安装到本地，并且在 package.json 中的 DevDependencies 中 添加依赖(开发依赖，项目发布后不会用到)

# 处理二进制数据
# 文件操作
# 实现 tcp 与 udp 的数据通信
# 创建 http 服务
# 进程
# 错误处理
# 加密与压缩
# 其他模块
# 数据库
# express
# socket.io