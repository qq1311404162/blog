## 基础知识

<!-- https://segmentfault.com/a/1190000011381906 -->
### 生命周期
vue 的所有生命周期自动绑定 this 上下文到实例中。因此无法用箭头函数来定义一个生命周期。

##### beforeCreate 和 create
beforeCreate 钩子函数调用时，无法获取 data 和 props 数据

created 钩子函数调用时，可以访问 data、props 数据，**此时组件还未被挂载，$el 属性不可见**
##### beforeMount 和 mounted
先执行 beforeMount 钩子函数，挂在之前被调用，$el 已经被初始化，开始创建 VDOM

然后执行 mounted 钩子函数，并将 VDOM 渲染为真实的 DOM 并渲染数据。

组件中如果有子组件，会递归挂载子组件，当全部子组件全部挂载完毕，才会执行根组件的挂载钩子。

**服务端渲染时，无法调用这两个钩子函数**
##### beforeUpdate 和 updated
数据更新前和更新后调用
##### activated 和 deactivated
keep-alive 组件独有的生命周期。该组件激活时调用 activated 函数，停用时调用 deactivated 函数

**服务端渲染时，无法调用这两个钩子**
##### beforeDestroy 和 destroyed
beforeDestroy 在实例销毁之前调用，此时仍可调用实例

destroyed 在实例销毁后调用。调用后，实例指示的所有东西都会解绑，所有的事件监听器都会被移除，所有的子实例也会被销毁

**服务端渲染时，无法调用这两个钩子**

### 组件通信

#### 父子组件通信
父组件通过 props 传递数据给子组件，子组件通过 emit 事件传递数据给父组件。典型的单项数据流

父组件使用 v-model，子组件中会默认解析props名为 value 的值和 event 名为 input 的事件。典型的双向绑定，常用语 UI 控件上。根本上和上面的相同
#### 兄弟组件通信
通过查找父组件中的子组件实现，即this.$parent.$children，在 $children 通过 组件 name 查询到需要的实例
#### 跨多层级组件通信
通过 vuex 解决
#### 任意组件通信
通过 vuex 解决
### extend
扩展组件生成一个构造器
### mixin 和 mixins  区别
mixin 用于全局混入，会影响到每一个组件实例
mixins 常用来扩展组件。如果多个组件中有相同的业务逻辑，可以将代码剥离，然后用 mixins 混入代码。比如上拉下拉加载等逻辑

mixins 混入的钩子函数会先于组件内的钩子函数执行，同名选项时也会有选择性的合并

### computed 和 watch
computed 是计算属性，依赖其他属性计算值，值有缓存，只有当计算值变化才会返回内容

watch 监听到值的变化就会执行回调，在回调汇总执行一些逻辑操作
### keep-alive 组件
多个组件切换时，使用 keep-alive 组件防止多次渲染。该组件在切换时不会进行销毁，而是缓存到内存中并执行 deactivated 钩子函数
### v-show 与 v-if
v-show 在 displa: none 和 display: block 之间切换。初次渲染时开销更大，切换开销很小。适合切换频繁的长青

v-if 值为 true 时，才会渲染组件，切换时会触发销毁/挂载组件，切换时开销更高，适合不经常切换的场景

### 组件中，data 为什么要用 function 返回对象
因为组件可能被用来创建多个实例，data 如果是一个对象，则所有实例使用的是同一个 data，使用 function 返回对象，就相当于声明了新对象，相互独立

如果不是组件的话，data 就可以是一个对象
## 进阶知识
### 响应式原理/数据双向绑定原理
内部使用 Object.defineProperty() 实现数据响应式，挂载组件时，会遍历所有的属性，使用 Object.defineProperty() 把这些属性全部转为 getter/setter

由于 Object.defineProperty() 是 ES5 中一个无法 shim 的特性，所以 vue 不支持 IE8 以及更低的浏览器
### Object.defineProperty() 的缺陷
###### 通过下标方式修改数组数据 或者 给对象新增属性，并不会触发组件的重新渲染，因为 Object.defineProperty 不能拦截到这些操作

### 编译过程
vue 会通过编译器将模板通过几个阶段最终编译为 render 函数，然后执行 render 函数生成 VDOM，最终映射为真实的 DOM

###### 将模板解析为 AST
通过各种正则表达式匹配模板中的内容，将其提取出来做各种逻辑操作，最终生成一个 AST 对象
###### 优化 AST
对节点进行静态内容提取，实现复用 VDOM
##### AST 转换为 render 函数
遍历整个 AST，根据不同的条件生成不同的代码

### nextTick 原理
nextTick 可以在下次 DOM 更新循环结束后执行延迟回调，用于获得更新后的 DOM

vue 使用异步队列的方式来控制 DOM 更新和 nextTick 回调的先后执行

使用方式：
* 将 nextTick 放入微任务(Promise or MutationObserver)中，使其在本次事件循环的最后获取更新后的 DOM
* 浏览器不支持微任务时，使用降级策略。setImmediate，MessageChannel，setTimeout 依次降级

## Vuex
Vuex 就是一个状态管理模式，更改里面的值，依赖这个属性的组件也会发生更新
### 好处
* vue 中兄弟组件通信，使用 Vuex 方便
* 共用数据时，只需在 Vuex 中修改，否则可维护性下降
