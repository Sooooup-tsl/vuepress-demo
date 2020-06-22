module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/assets/logo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    configureWebpack: {
        resolve: {
            alias: {
                '@alias': 'path/to/some/dir'
            }
        }
    },
    themeConfig: {
        logo: '/assets/logo.gif',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/tech/interview/' },
            { text: 'External', link: 'https://google.com', target:'_blank' },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'Japanese', link: '/language/japanese/' }
                ]
            }
        ],
        sidebar: 'auto', // 侧边栏配置
    }
}