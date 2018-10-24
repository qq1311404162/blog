module.exports = {
    title: '闲庭梦若',
    description: 'blog',
    themeConfig: {
        repo: 'https://github.com/qq1311404162/blog',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Test', link: '/A/a' },
          { text: 'B', link: '/B/b' },
          { text: 'External', link: 'https://google.com' },
        ],
        sidebar: {
            '/A/': [
                ['a', 'sidebar a']
            ],
            '/B/': [
                ['b', 'sidebar b'],
                {
                    title: 'group b',
                    collapsable: true,
                    children: [
                        ['b', 'sidebar b2'],
                        ['b', 'sidebar b3'],
                    ]
                },
            ],

        }
      }
}