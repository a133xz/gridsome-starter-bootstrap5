module.exports = {
  siteName: 'Bootstrap 5 & Gridsome',
  siteDescription: 'Bootstrap 5 starter',
  siteUrl: 'https://gridsome-starter-bootstrap5.vercel.app/',
  plugins: [
    {
      use: '@gridsome/plugin-critical',
      options: {
        paths: ['/'],
        width: 1300,
        height: 900
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    },
    {
      use: 'gridsome-plugin-sass-resources-loader',
      options: {
        // provide path to the file with resources
        resources: ['@/assets/scss/_variables.scss']
      }
    },
    {
      use: 'gridsome-plugin-static-metadata',
      options: {
        title: 'Bootstrap 5 & Gridsome | Your new new boilerplate',
        image: '/meta.png',
        themeColor: '#171c31',
        robots: true,
        lang: 'en',
        locale: 'en_EN'
      }
    },
    {
      use: 'gridsome-plugin-i18n',
      options: {
        locales: ['en'],
        fallbackLocale: 'en',
        enablePathRewrite: false,
        messages: process.env.NODE_ENV === 'production' && {
          en: require('./src/locales/en.json')
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: 'markdown/pages',
        path: '*.md',
        typeName: 'MdPage',
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer']
        }
      }
    }
  ],
  css: {
    loaderOptions: {
      scss: {}
    }
  },
  templates: {
    MdPage: '/legal/:fileInfo__name'
  }
};
