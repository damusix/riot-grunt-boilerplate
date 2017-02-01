module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-riot');

    grunt.registerTask('js', ['riot', 'browserify']);
    grunt.registerTask('css', ['sass']);
    grunt.registerTask('build', ['riot', 'browserify', 'sass']);
    grunt.registerTask('default', ['riot', 'browserify', 'sass', 'watch']);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        riot: {
            options: {
                concat: true
            },
            dev: {
                src: './client/**/*.tag',
                dest: './tmp/tags.js'
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    './public/app.css': './client/app.scss'
                }
            }
        },

        browserify: {
            development: {
                src: [
                    './client/app.js',
                    './tmp/tags.js'
                ],
                dest: './public/app.js',
                options: {
                    browserifyOptions: { debug: true },
                    transform: [
                        ['babelify', { presets:['es2015'] }]
                    ]
                }
            }
        },

        watch: {

            sass: {
                files: './client/**/*.scss',
                tasks: ['sass'],
                options: {
                    livereload: true
                }
            },

            js: {
                files: './client/**/*.js',
                tasks: ['browserify'],
                options: {
                    livereload: true
                }
            },

            riot: {
                files: './client/**/*.tag',
                tasks: ['riot','browserify'],
                options: {
                    livereload: true
                }
            }

        }

    });

};
