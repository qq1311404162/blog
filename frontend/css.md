## CSS 选择器
通过某种规则来匹配相应的标签，并为其设置 CSS 样式。常用的有类选择器、ID 选择器、后代选择器、群组选择器、伪类选择器、兄弟选择器、属性选择器等等
## CSS Reset
HTML 标签在不设置任何样式的情况下，也会有一个默认的 CSS 样式，而不同内核的浏览器对于这个默认值也不尽相同，这样会导致同一套代码在不同浏览器中显示的效果不一致。因此在初始化中，需要读常用的标签进行初始化，使其默认样式统一
## BFC
页面上的隔离的独立容器，容器里面的子元素不会影响到外面的元素

满足 BFC 的条件
* HTML 元素
* float != none 的浮动元素
* overflow  != visible 的元素
* diaplay = inline-block/tabel-cell/tabel-caption
* position = absolute/fixed
## 盒子布局
CSS 布局的基石，常见的有块级盒子(block)和行内盒子(inline)，与盒子相关的属性有：margin、border、padding 和 content

**只有普通文档流中块级盒子的垂直 margin 才会发生合并**

CSS 通过 box-sizing 属性设置盒模型
##### content-box 标准盒模型
标签宽高 = content 的宽高，border 和 padding 不在标签的计算内
##### border-box IE 盒模型
标签宽高 = content + padding + border，标签大小由三个属性值相加
## 浮动布局
设置 float 属性为 left or right。可以使该元素脱离普通文档流。

**如果子元素全部设置浮动，则父元素塌陷**，此时需要清除浮动
### 清除浮动
* 子元素末尾添加空元素，并设置 clear:both
* 父元素设置伪类来模拟一个空元素
* 设置 overflow = auto/hidden
## 定位布局
设置元素的 position 值为 relative、absolute、fixed，就可以使元素脱离普通文档流，并以某种参照坐标进行偏移
##### relative 相对定位
以自己原来的位置进行偏移，偏移后，原来的空间不会被其他元素占用
##### absolute 绝对定位
以离自己最近的定位父容器(postion 为 relative、absolute、fixed)作为参照进行偏移
##### fixed 固定定位
以浏览器窗口作为参照，进行偏移。在移动端有兼容性问题，一般使用绝对定位 + 内部滚动 替代
## 弹性布局
flex 布局，定义了 flex 的容器是一个可伸缩容器，容器本身会根据容器中的元素动态设置自身大小；当容器被固定大小时，将会自动调整容易中的大小

**设为 flex布局后，元素的float、clear、inline-block、vertical-align 属性将会失效**
## 格子布局
## CSS3 动画
CSS3 引入了三个动画，分别为 transition transform 和 animation
##### transition
可以让元素的 CSS 属性值变化在一段时间内平滑的过渡，形成动画效果
##### transform
让元素进行 平移、旋转、放大缩小、倾斜等操作，实现 2D 转 3D 的效果
##### animation
设置一个 @keyframes 来定义元素以那种形式进行变换，然后再通过动画函数平滑的进行变换，从而达到动画效果

**transition 只能通过改变元素的 CSS 值才能触发动画效果；animation 一旦被应用，就开始执行动画**
## Sprit、Iconfont、font-face
对于大型站点，为了减少 http 请求次数，图标会优化
##### Sprit
一般会将小图标设置成大图，页面加载时只请求一次网络，然后在 CSS 中通过设置 background-position 来控制显示所需的小图标
##### Iconfont
字体图标，将常用的图标转化为字体资源存放在文件中，可以直接用控制字体的 CSS 属性来设置图标的样式。好处是节省网络请求、大小不受屏幕分辨率影响，并且可以任意改变图标的颜色
##### font-face
CSS3 的一个模块，定义一个全新的字体，通过 font-family 来使用字体，即使操作系统没有安装此字体，也能在网页上显示出来
## CSSHack
早期不同的浏览器对 CSS 的属性解析存在着差异，导致显示结果不一致。让不同的浏览器识别不同的符号，以达到应用不同 CSS 样式的目的，就是 CSS Hack
* WebKit： -webkit-xxx
* firefox：@-moz-xxx
* IE6：_color:red
* IE7: *color:red
* IE8: color:red\9
* IE9：color：red\9