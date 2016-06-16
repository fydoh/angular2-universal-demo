/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',
    '@angular':                   'node_modules/@angular',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'angular2-universal':         'node_modules/angular2-universal',
    'angular2-universal-polyfills': 'node_modules/angular2-universal-polyfills',
    'common':                     'node_modules/angular2-universal/dist/common',
    'tokens':                     'node_modules/angular2-universal/dist/common/tokens',
    'rxjs':                       'node_modules/rxjs',
    'es6-promise':                'node_modules/es6-promise/dist/es6-promise.js',
    'es6-shim':                   'node_modules/es6-shim/es6-shim.js'
  };

    // 'angular2-universal':         'node_modules/angular2-universal',
    // 'angular2-universal-polyfills': 'node_modules/angular2-universal-polyfills',


  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
    'angular2-universal':         { main: 'browser.js', defaultExtension: 'js' },
    'angular2-universal-polyfills':         { main: 'browser.js', defaultExtension: 'js' },
    'tokens':         { main: 'index.js', defaultExtension: 'js' },
    'common':                     { main: 'index.js', defaultExtension: 'js' }
  };

    // 'angular2-universal':         { main: 'browser.js', defaultExtension: 'js' },
    // 'angular2-universal-polyfills':         { main: 'browser.js', defaultExtension: 'js' }

  var ngPackageNames = [
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade'
  ];
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: pkgName + '.umd.js', defaultExtension: 'js' };
  };
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  var config = {
    map: map,
    packages: packages
  }
  System.config(config);
})(this);
