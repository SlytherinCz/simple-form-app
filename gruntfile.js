module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            assets: {
                src: [
                    'node_modules/angular/angular.js',
                    'node_modules/angular-route/angular-route.js',
                    'node_modules/angular-resource/angular-resource.js',
                    'node_modules/angular-mocks/angular-mocks.js',
                    'node_modules/ngstorage/ngStorage.js',
                    'node_modules/angular-uuid/angular-uuid.js',
                    'node_modules/angular-input-dropdown/inputDropdown.js'
                ],
                dest: 'tmp/assets.js'
            },
            scripts: {
                src: [
                    'assets/scripts/Modules/*.js',
                    'assets/scripts/Templates/templates.js',
                    'assets/scripts/**/*.js'
                ],
                dest: 'tmp/scripts.js'
            },
            bundle: {
                src: [
                    'tmp/assets.js',
                    'tmp/scripts.js',
                    'tmp/templates.js'
                ],
                dest: 'public/scripts/bundle.js'
            }
        },
        ngtemplates:  {
            simpleFormApp:{
                src:      'assets/templates/**/*.html',
                dest:     'tmp/templates.js',
                options:    {
                    htmlmin:  { collapseWhitespace: true, collapseBooleanAttributes: true },
                    url : function(url) {return url.replace(/.+\//,'')}
                }
            }
        },
        clean: {
            tmp:['tmp/*']
        },
        copy : {
            bootstrap: {
                files:[
                    {expand:true,cwd:'node_modules/bootstrap-sass-grid/sass',src: ['**'], dest: 'assets/stylesheets/vendor'}
                ]
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'public/stylesheets/bundle.css': 'assets/stylesheets/bundle.scss'
                }
            }
        },
        watch: {
            assets : {
                files: ['assets/templates/*.html','assets/scripts/**/*.js'],
                tasks: ['ngtemplates', 'concat','clean']
            },
            stylesheets : {
                files: ['assets/stylesheets/*.scss'],
                tasks: ['sass:dist']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy')
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('post-install',['copy','sass','ngtemplates','concat','clean']);
};
