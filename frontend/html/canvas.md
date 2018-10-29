canvas 是 HTML5 新添加的元素，这个元素负责设定一个区域，然后通过 JavaScript 动态在这个区域绘制图形

# 做一个系列，否则文章太长了

canvas 的坐标系

<canvas id="canvas"></canvas>
#### 准备操作
1. 页面中添加一个 canvas 元素，元素中设置 width  和 height 属性指定绘画区域大小
2. 在 JavaScript 中，获取上面 canvas 元素的对象
3. 使用 getCOntext('2d') 方法获取画布上的绘图环境，该方法返回一个 CanvasRenderingContext2D 对象，使用此对象提供的 API 创建图像
#### 属性
1. 文本属性
    * font：canvas 文本当前的字体属性
    * textAlign：canvas 文本当前对齐方式
    * textBaseline：canvas 文本当前文本基线
2. 元素属性
    * width
    * height
3. 颜色、样式和阴影属性
    * fillStyle：填充的颜色、渐变或模式
    * strokeStyle：笔触的颜色、渐变和模式
    * shadowColor：阴影的颜色
    * shadowBlur：阴影的模糊级别
    * shadowOffsetX：阴影矩形形状的水平距离
    * shadowOffsetY：阴影矩形形状的垂直距离
4. 线条样式
    * lineCap：线条的结束端点样式
    * lineJoin：两条线相交时，创建的拐角类型
    * lineWidth：当前线条宽度
    * miterLimit：最大斜长度
5. 合成属性
    * globalAlpha：当前绘图的透明值
    * globalCompositeOperation：新图像如何绘制到已有的图像上面