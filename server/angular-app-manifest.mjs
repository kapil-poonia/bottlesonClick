
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://kapil-poonia.github.io/bottlesonClick/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/bottlesonClick"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16745, hash: '97e6ff6e8d393d9850855e36ac97c029ad8eaf0a3855d41dd2ff66f552b595e7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17052, hash: 'ca1271e34f2db98b6a6160e0751e9e44e1722c940ddeea2dc6f7024549fdca4b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 24323, hash: '0985dac866b8fce9ef175aa22e7863b59ab5e9a6478dd6ce091cd86a51e9328c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-355664G3.css': {size: 81, hash: 'uBh+i2FV0uY', text: () => import('./assets-chunks/styles-355664G3_css.mjs').then(m => m.default)}
  },
};
