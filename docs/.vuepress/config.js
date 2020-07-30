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
      '/pages/3x/': ['', 'entry', 'advance', 'more']
    },
    lastUpdated: 'Last Updated',
    smoothScroll: true,
    markdown: {
      extracHeaders: ['h2', 'h3', 'h4']
    }
  }
}
