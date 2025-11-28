
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 2315, hash: 'c43115ba721e8445e6d2c10c799cc3586d88b617d14fc23d95253c119306ff9b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1023, hash: '38be6db5cf651c020afb19eb7e724c417d8c28ae1cba434be6213cf616fcf369', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-QG55RQVQ.css': {size: 15455, hash: 'eW0jbUjp+Yg', text: () => import('./assets-chunks/styles-QG55RQVQ_css.mjs').then(m => m.default)}
  },
};
