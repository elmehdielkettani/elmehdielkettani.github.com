/*global module:false*/
module.exports = function(grunt) {
	grunt.initConfig({
		config: {
			assetsDir: 'assets'
		},

		less: {
			dev: {
				files: {
					'<%= config.assetsDir %>/css/main.css' : '<%= config.assetsDir %>/less/main.less'
				}
			}
		},

		watch: {
			less: {
				files: '<%= config.assetsDir %>/less/**/*.less',
				tasks: ['less:dev']
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');

	grunt.registerTask('default', ['less:dev']);
};
