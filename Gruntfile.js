module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.config('jshint', {
    all: ['Gruntfile.js', 'src/*.js', 'example/src/*.js', 'example/test/*.js']
  });

  grunt.config('mochaTest', {
    test: {
      options: {
        reporter: 'spec'
      },
      src: ['test/**/*.js']
    }
  });

  grunt.config('concat', {
    options: {
      separator: ';',
    },
    build: {
      files: [{
        src: ['src/chrome-event.js', 'src/chrome.js'],
        dest: 'chrome.js'
      }]
    },
    example: {
      files: [{
        src: ['chrome.js'],
        dest: 'example/node_modules/sinon-chrome/chrome.js'
      }, {
        src: ['src/phantom-tweaks.js'],
        dest: 'example/node_modules/sinon-chrome/phantom-tweaks.js'
      }]
    }
  });

  grunt.registerTask('test', [
    'jshint',
    'mochaTest'
  ]);

  grunt.registerTask('build', [
    'test',
    'concat:build'
  ]);

  grunt.registerTask('example', [
    'build',
    'concat:example'
  ]);
};