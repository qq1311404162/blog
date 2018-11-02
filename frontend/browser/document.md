### DOM
DOM(Document Object Model)文档对象模型是针对 HTML 和 XML 文档的一个 API。描绘了一个层次化的节点树，允许开发人员添加、移除和修改页面的某一部分

#### 节点类型
1. Node 类型，客户端 JS 中所有的节点类型都继承自 Node 类型，因此所有节点都共享其属性和方法
2. Document 类型，客户端 JS 通过 Document 类型表示整个 HTML 或 XML 文档
3. HTMLDocument 类型，继承自 Document 类型。浏览器中的 document 对象其实是 HTMLDocument 的实例，表示整个 HTML 页面
4. Element 类型，用于表现 HTML 或 XML 元素，提供了对元素标签名、子节点及特性的访问
5. Text 类型，文本节点的类型，包含纯文本内容
6. Comment 类型，注释类型
7. CDATASection 类型，XML 文档的 CDATA 区域内容
8. DocumentType 类型，doctype 有关的信息
9. DocumentFragment 类型
10. Attr 类型，元素特性