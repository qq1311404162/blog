# Buffer 类处理二进制文数据
node 中定义了一个 Buffer 类，创建一个专门存放二进制数据的缓存区。

### 创建 Buffer 对象
Buffer 类是一个全局类，直接用 new 关键字创建该实例
1. new Buffer(size)     创建一个缓存区大小为 size 的 Buffer 对象
2. new Buffer(aeeay)    创建一个由指定数组初始化的对象
3. new Buffer(str [,encoding])  直接用字符串初始化缓存区，可指定文字编码，默认为 utf8

### 缓存区的长度
Buffer 缓存区以字节为单位

### Buffer 对象转换字符串

##### buf.toString([encoding, ][start, ][end])      将 Buffer 对象中的数据转换为字符串
##### buf.write(string [, offset, ] [length, ] [encoding])      向 Buffer 对象中写入新的字符串，从第 1+offset 字节处开始写入数据
##### StringDecoder 对象转换成字符串

### Buffer 对象转换数值
。。。

### Buffer 对象与 JSON 对象相互转换
* JSON.stringify() 将 Buffer 对象中数据转换为字符串
* JSON.parse() 将转换后的字符串还原成数组，再构建成 Buffer 对象

### 复制 Buffer 数据
Buffer.copy(targetBuffer [, targetStart,] [sourceStart,] [sourceEnd])   拷贝到新的对象中
* targetStart 新对象从第几个字节开始写入
* sourceStart 从源对象第几个字节获取数据起始位置
* sourceEnd   从源对象第几个字节处结束

### Buffer 类方法

##### isBuffer()        判断一个对象是否为 Buffer 对象
##### byteLength()      计算指定字符串的字节数
##### concat()          将几个 Buffer 对象合并为一个新的 Buffer 对象
##### isEncoding()      检测一个字符串是否为有效的编码格式字符串

# 文件操作