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
    'build-chrome': {
      src: ['src/chrome-event.js', 'src/chrome.js'],
      dest: 'chrome.js',
    },
    'build-phantom': {
      src: ['src/phantom-tweaks.js'],
      dest: 'phantom-tweaks.js',
    }
  });

  grunt.registerTask('test', [
    'jshint',
    'mochaTest'
  ]);

  grunt.registerTask('build', [
    'test',
    'concat'
  ]);
};