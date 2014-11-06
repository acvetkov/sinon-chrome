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

  grunt.registerTask('test', [
    'jshint',
    'mochaTest'
  ]);

};