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

##### 事件循环的执行顺序
1. 执行 JS 主体代码(宏任务)
2. 主体代码执行完毕，执行完所有的微任务
3. 寻找一个新的宏任务执行(注意这里只执行一个宏任务，如果有多个，则要等到这个任务和这个任务包含的微任务执行完毕后，才能执行下一个宏任务)，并执行完毕
4. 执行完所有的微任务
5. 如此反复，直到停止

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