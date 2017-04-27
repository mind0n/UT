
module.exports = function(config) {

  config.set({
    basePath: '',
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-coverage'),
      require('karma-jasmine-html-reporter'),
      require('karma-threshold-reporter')
    ],

    // list of files / patterns to load in the browser
    files: [
      'node_modules/systemjs/dist/system.src.js',

      // Polyfills
      'node_modules/core-js/client/shim.js',
      'node_modules/reflect-metadata/Reflect.js',
      
      // zone.js
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/long-stack-trace-zone.js',
      'node_modules/zone.js/dist/proxy.js',
      'node_modules/zone.js/dist/sync-test.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',

      { pattern: 'node_modules/@angular/**/*.js', included: false, watched: false }
      ,{ pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false }
      ,{ pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false }
      ,{ pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false }
      ,{ pattern: 'systemjs.config.js', included: false, watched: false }
      ,'karma-test-shim.js'
      ,{ pattern: 'build/app/**/*.js', included: false, watched: true },
      //{ pattern: 'src/app/**/*.ts', included: false, watched: true },
      //{ pattern: 'build/app/**/*.js.map', included: false, watched: true }
    ],
    // list of files to exclude
    exclude: [
      './build/**/polyfills.js'
      ,'./build/**/vendor.js'
    ],
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      "build/app/**/*.js":["coverage"]
    },
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage', 'threshold'],
    coverageReporter:{
      type:'html',
      dir:'test-coverage/'
    },

    // the configure thresholds
    thresholdReporter: {
      statements: 85,
      branches: 85,
      functions: 85,
      lines: 85
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
