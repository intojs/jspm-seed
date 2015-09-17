module.exports = function (config) {

    'use strict';

    config.set({

        basePath: './../',
        
        frameworks: ['jspm', 'jasmine', 'phantomjs-shim'],

        jspm: {
            loadFiles: [
                'src/**/*.spec.js',
                'src/**/!(*spec).js'
            ],
            serveFiles: [
                'src/**/*.tpl.html'
            ]
        },

        files: [
        ],

        exclude: [],

        preprocessors: {},

        reporters: ['progress'],

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: true,

        browsers: ['PhantomJS'],

        singleRun: false
    });
};