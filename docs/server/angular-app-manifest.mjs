
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 2316, hash: '53114181b2a86bd708bd41ee6fa26b629e4c94b8ad6cc629c2d2c4b6f2451539', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1024, hash: '1616b5db03ceb90e637acdf2be86a0ef9466957b9ac2c4fb00ffdc97234a1c4c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-T52DOWLM.css': {size: 13838, hash: 'La02arLmgOI', text: () => import('./assets-chunks/styles-T52DOWLM_css.mjs').then(m => m.default)}
  },
};
