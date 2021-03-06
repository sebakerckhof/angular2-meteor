Package.describe({
  name: 'barbatus:angular2-runtime',
  version: '0.5.0',
  summary: 'Polyfills for Angular2',
  git: 'https://github.com/Urigo/angular2-meteor/tree/master/atmosphere-packages',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.1');

  api.use([
    'underscore',
    'ecmascript'
  ]);

  api.addFiles(['client_deps.js'], 'client', {
    lazy: false
  });

  api.addFiles(['server_deps.js'], 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('barbatus:angular2-runtime');
});
