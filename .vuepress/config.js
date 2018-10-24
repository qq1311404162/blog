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
                        ['javaScript/var', '从运行机制看变量提升'],
                        ['javaScript/prototype', '原型及原型链'],
                        ['javaScript/this', 'this'],
                        ['javaScript/async', '异步'],
                    ]
                },
                {
                    title: 'HTML',
                    collapsable: true,
                    children: [
                        ['html', 'html'],
                    ]
                },
                {
                    title: 'CSS',
                    collapsable: true,
                    children: [
                        ['html', 'html'],
                    ]
                },
                {
                    title: 'DOM 相关',
                    collapsable: true,
                    children: [
                        ['html', 'DOM 标准'],
                    ]
                },
                {
                    title: 'HTTP 相关',
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