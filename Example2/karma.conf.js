module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'js/*.js',
      'js/app/*.js',
      'js/app/components/bower/angular/angular.js',
      'js/app/components/bower/angular-route/angular-route.js',
      'js/app/components/bower/angular-mocks/angular-mocks.js',
      'js/app/components/kn/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
