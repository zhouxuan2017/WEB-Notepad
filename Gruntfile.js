/*global module:true*/
module.exports = function (grunt) {
  grunt.initConfig({
    eslint: {
      options: {
        configFile: '.eslintrc.json'
      },
      target: ['./js/*.js']
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      src: './css/*.css'
    },
    htmlhint: {
      options: {
        htmlhintrc: '.htmlhintrc'
      },
      src: '*.html'
    },
    mocha: {
      test: {
        src: ['./index.html'],
      },
      options: {
        run: true,
        reporter: 'Spec'
      }
    },
    htmlmin: {
      options: {
        collapseWhitespace: true,
        preserveLineBreaks: false
      },
      files: {
        src: './index.html',
        dest: 'dist/index.html'
      }
    },
    cssmin: {
      'dist/css/font.css': './css/font.css',
      'dist/css/list.css':'./css/list.css',
      'dist/css/menubar.css':'./css/menubar.css'
    },
    uglify: {
      release:{
        files: {
          'dist/js/font.js': './js/font.js',
          'dist/js/main.js':'./js/main.js',
          'dist/js/list.js':'./js/list.js',
          'dist/js/menubar.js':'./js/menubar.js'
        }
      }
    },

   });

  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');


  grunt.registerTask('lint', ['htmlhint', 'csslint', 'eslint']);
   grunt.registerTask('default', [ 'uglify',  'cssmin', 'htmlmin']);
};
