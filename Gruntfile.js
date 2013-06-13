module.exports = function( grunt ){

    // Project Configuration
    grunt.initConfig({
         pkg: grunt.file.readJSON( 'package.json' )

         // Uglify JS
        ,uglify: {
             options: { }
            ,dist: {
                files: {
                     'public/dest/file.js' : ['source.js']
                }
            }
        }

        // Compile LESS
        ,less: {
            development: {
                options: {
                    compress: true
                }
                ,files: {
                     'public/css/dest.min.css': 'source.less'
                }
            }
        }

        // Watch Directories / Files
        ,watch: {
             files: ['lib/*.js', 'theme/*.less']
            ,tasks: ['default']
        }
    });

    // Load the plugin that provides the 'uglify' task
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );
    grunt.loadNpmTasks( 'grunt-contrib-less' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );

    // Default tasks
    grunt.registerTask( 'default', ['uglify', 'less'] );
};
