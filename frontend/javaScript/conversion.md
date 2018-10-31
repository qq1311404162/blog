### toString()
* 基本类型 -> '基本类型'
* 极大和极小的数字 -> '指数形式'
* 普通对象 -> toString() 方法 || [[class]] 的值


`toPrimitive()：对象转基本类型，先执行 valueOf() 方法，结果为原始值就返回，否则执行 stringOf() 方法，结果为原始值就返回，否则抛出异常`
### toNumber()
* true -> 1
* false -> 0
* undefined -> NaN
* null -> 0
* 字符串

    * 只包含数字 -> 10进制数字（忽略前导0）
    * 包含有效的浮点格式 -> 浮点值（忽略前导0）
    * 空字符串 -> 0
    * 其他格式 -> NaN
* 对象 -> toPrimitive()，然后执行上面方法

### toBoolean()
* undefined -> false
* null -> false
* false -> false
* +0、-0、NaN -> false
* '' -> false
* 其他所有值 -> true

### 四则运算符
* + -> 只要有一方是字符串，另一个也会转换成字符串
* -、*、/ -> 只要有一方是数字，另一方也会转换成数字
