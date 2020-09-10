module.exports = {
  title: 'fbi docs',
  description: 'fbi文档, docs, doucument',
  head: [['link', { rel: 'icon', href: '../logo.png' }]],
  themeConfig: {
    logo: '../logo.png',
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
  }
}
