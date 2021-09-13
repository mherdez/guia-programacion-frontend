module.exports = {
  title: 'Programación Frontend',
  description: 'Guía paso a paso para aprender a programar HTML, CSS y JS... y más',
  dest: 'docs',
  base: '/guia-programacion-frontend/',

  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  themeConfig: {
    editLinks: false,
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guía',
        link: '/',
      },
      {
        text: 'HTML',
        link: 'https://www.w3schools.com/html/default.asp'
      },
      {
        text: 'CSS',
        link: 'https://www.w3schools.com/css/default.asp'
      },
      {
        text: 'Javascript',
        link: 'https://www.w3schools.com/js/default.asp'
      }
    ],
    sidebar: [
      '/',
      '/00-markdown/',
      '/01-html/',
      '/01-ejercicios-html/',
      // '/02-css/',
      // '/03-javascript/'
    ]
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
