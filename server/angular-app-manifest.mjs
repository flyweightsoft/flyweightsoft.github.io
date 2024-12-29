
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 2316, hash: 'c5a2a17a31202eb8624a550aee86d00bde5733aef2466b99b8f0cf96e64b74a7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1024, hash: '5a3563fb9d9911e76699f4c20948f4b6b26470c3bc69531645d8a7e902114a82', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-PEU3D3AS.css': {size: 11770, hash: '7pufBB7UBW0', text: () => import('./assets-chunks/styles-PEU3D3AS_css.mjs').then(m => m.default)}
  },
};
