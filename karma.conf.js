module.exports = function(config) {

    config.set({
        basePath: '',
        frameworks: ['mocha','chai','riot'],
        plugins: [
            'karma-mocha',
            'karma-mocha-reporter',
            'karma-phantomjs-launcher',
            'karma-chai',
            'karma-riot'
        ],
        files: [
            'node_modules/phantomjs-polyfill-object-assign/object-assign-polyfill.js',
            'node_modules/babel-polyfill/dist/polyfill',
            'node_modules/chai/chai',
            'public/app.js',
            'test/client/**/*.js'
        ],
        preprocessors: {
            '**/*.tag': ['riot']
        },
        riotPreprocessor: {
            options: {
                type: 'es6'
            }
        },
        browsers: ['PhantomJS'],
        reporters: ['mocha'],
        failOnEmptyTestSuite: false,
        autoWatch: true
    });

};
