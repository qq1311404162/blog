# 盒模型
dom 中的每个标签，都由content，padding，border，margin 几个部分组成，不同的盒模型，标签的大小计算方式不同。通过 box-sizing 进行设置盒模型
* 1.content-box 标准盒模型，标签 height/width = content。border 和 padding 的大小不在标签的计算内容内
* 2.border-box  IE盒模型，标签 height/width = content + padding + border。标签大小由三个属性值相加得出

**标准盒模型实例**
![content-box](./content-box.png 'content-box')

**IE盒模型实例**
![border-box](./border-box.png 'border-box')

IE8+ 中，默认值用标准盒模型，IE6，7，8中，doctype缺失会触发 IE模式，使用IE盒模型

# BFC
BFC：Block Formatting Content，即块级格式化上下文。是 css2.1 规范定义的，关于 css 渲染定位的一个概念。

其实说白了，如果**一个标签内外的元素互相不受影响**，则此标签构成的区域就是一个 BFC。

##### 标签如何形成一个 BFC 区域
* 根元素，即 HTML 元素。HTML 元素是网页中最大的一个 BFC。
* float != none。当标签浮动时，其内部区域与外部不受影响，会形成一个 BFC
* overflow != visible。当内容溢出被修剪时，标签内部与外部会形成两个独立的环境，形成一个 BFC
* display 值为 inline-block/table-cell/flex
* position 值为 fixed/absolute

##### BFC 区域特性
* BFC 内部元素，会根据常规流进行摆放？？？
* BFC 区域和非 BFC 区域的垂直 margin 不会重叠
* 每个 BFC 内子块级元素的margin-left，与构成 BFC 元素的 border-left 重合？？？
* BFC 的区域，不会与其他浮动的元素区域重叠，即 BFC 区域总是与浮动元素相邻
* BFC 内部有浮动元素，浮动元素的高度被算入 BFC 高度内。若要清除浮动，将父元素设置为 BFC 即可

# 层叠上下文

##### 层叠等级
1. background/border
2. z-index < 0
3. 块级元素
4. 浮动元素
5. 行内元素
6. z-index = 0/auto（没有设置层叠上下文）
7. z-index > 0
8. z-index 越大，层叠等级越高

# 居中布局

##### 水平居中
* 行内元素 text-align: center;
* 块级元素 margin: 0 auto;
* absolute + transform
* flex + justify-content: center

##### 垂直居中
* line-height: height
* absolute + transform
* flex + align-item: center
* table

##### 水平垂直居中
* absolute + transform
* flex + justify-content + align-items

# 选择器

# 去除浮动影响
* 父标签创建 BFC 
* 父标签设置高度
* 增加尾元素，设置属性
    * :after/<br> : clear:both

# link 和 import 的区别

# css 预处理器

# 动画