module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.config('jshint', {
		all: ['Gruntfile.js', 'src/*.js', 'example/src/*.js', 'example/test/*.js']
	});

	grunt.registerTask('check', [
		'jshint'
	]);
};