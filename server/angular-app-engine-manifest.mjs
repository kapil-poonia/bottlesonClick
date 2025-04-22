
export default {
  basePath: 'https://kapil-poonia.github.io/bottlesonClick',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
