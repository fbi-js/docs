module.exports = {
  title: 'fbi docs',
  description: 'fbi文档, docs, doucument',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      {
        text: '版本',
        items: [
          { text: '3.x', link: '/pages/3x/' },
          { text: '4.x', link: '/pages/4x/' }
        ]
      }
    ],
    sidebar: {
      '/pages/3x/': ['', 'entry', 'advance', 'more'],
      '/pages/4x/': ['', 'entry', 'advance', 'more']
    },
    lastUpdated: '最近更新',
    smoothScroll: true,
    markdown: {
      extracHeaders: ['h2', 'h3', 'h4']
    }
  },
  base: '/docs/',
  plugins: [
    [
      'vuepress-plugin-helper-live2d',
      {
        // 是否开启控制台日志打印(default: false)
        log: false,
        live2d: {
          // 是否启用(关闭请设置为false)(default: true)
          enable: true,
          // 模型名称(default: hibiki)>>>取值请参考：
          // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
          model: 'hijiki',
          display: {
            position: 'right', // 显示位置：left/right(default: 'right')
            width: 150, // 模型的长度(default: 135)
            height: 350, // 模型的高度(default: 300)
            hOffset: 65, //  水平偏移(default: 65)
            vOffset: 0 //  垂直偏移(default: 0)
          },
          mobile: {
            show: false // 是否在移动设备上显示(default: false)
          },
          react: {
            opacity: 1 // 模型透明度(default: 0.8)
          }
        }
      }
    ]
  ]
}
