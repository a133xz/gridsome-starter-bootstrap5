import './assets/scss/main.scss';
import DefaultLayout from '~/layouts/Default.vue';

export default function (Vue, { appOptions, head, router }) {
  // eslint-disable-next-line vue/multi-word-component-names
  Vue.component('Layout', DefaultLayout);

  appOptions.i18n.setLocaleMessage('en', require('./locales/en.json'));

  head.link.push({
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com'
  });
  head.link.push({
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossorigin: ''
  });
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap'
  });
}
