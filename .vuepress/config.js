module.exports = {
    title: '闲庭梦若',
    description: '好记性不如烂笔头',
    themeConfig: {
        repo: 'https://github.com/qq1311404162/blog',
        nav: [{
                text: '首页',
                link: '/'
            },
            {
                text: '前端',
                link: '/frontend/'
            },
            {
                text: '后端',
                link: '/backend/'
            },
            {
                text: '数据结构与算法',
                link: '/algorithmAndDataStructure/'
            },
        ],
        sidebar: {
            '/frontend/': [{
                    title: 'JavaScript',
                    collapsable: true,
                    children: [
                        ['javaScript/var', '作用域以及执行上下文'],
                        ['javaScript/closure', '闭包'],
                        ['javaScript/expression', '函数表达式'],
                        ['javaScript/object', '对象'],
                        ['javaScript/new', 'new'],
                        ['javaScript/var', '深浅拷贝'],
                        ['javaScript/this', 'this'],
                        ['javaScript/prototype', '原型及原型链'],
                        ['javaScript/extend', '继承'],
                        ['javaScript/async', '异步'],
                        ['javaScript/conversion', '类型转换'],
                        ['javaScript/async', 'typeOf与instanceof'],
                        ['javaScript/async', '模块化'],
                    ]
                },
                {
                    title: 'HTML',
                    collapsable: true,
                    children: [
                        // ['html', 'HTML5 新特性'],
                        ['html/storage', 'HTML5 本地存储'],
                        ['html/canvas', 'Canvas'],
                        ['html', '缓存'],
                    ]
                },
                {
                    title: 'CSS',
                    collapsable: true,
                    children: [
                        ['css/media', '媒体查询'],
                        ['css/transtorm', '转换'],
                        ['css/transition', '过度'],
                        ['css/animation', '动画'],
                        ['css/flex', 'flex布局'],
                    ]
                },
                {
                    title: '浏览器相关',
                    collapsable: true,
                    children: [
                        ['html', 'DOM 标准'],
                        ['html', 'BOM 标准'],
                    ]
                },
                {
                    title: '网络',
                    collapsable: true,
                    children: [
                        ['http/cache', 'HTTP 缓存'],
                    ]
                },
                {
                    title: '框架',
                    collapsable: true,
                    children: [
                        ['html', 'html'],
                    ]
                },
            ]

        }
    }
}