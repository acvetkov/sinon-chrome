module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-jscs');

	grunt.config('jshint', {
		all: ['Gruntfile.js', 'src/*.js', 'sample/src/*.js', 'sample/test/*.js']
	});
};