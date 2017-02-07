module.exports = function(grunt){
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),

		chassis: {
			src: '.',
			dist: 'dist',
			test: 'test'
		},
		clean: {
			dist: {
				files: [{
					dot: true,
					src: [
						'<%= chassis.dist %>',
						'!<%= chassis.dist %>/.git*'
					]
				}]
			}
		},
		copy : {
			css: {
				expand: true,
				cwd: '<%= chassis.dist %>',
				src: 'chassis.css',
				dest: '<%= chassis.test %>'
			}
		},
		sass: {
			dist: {
				files : [{
					expand: true,
					cwd: '<%= chassis.src %>',
					src: ['**/*.scss', '!test/**/*.scss'],
					dest: '<%= chassis.dist %>',
					ext: '.css'
				}]
			}
		},
		watch: {
			scss: {
				files: ['**/*.scss','!test/**/*.scss'],
				tasks : ['default'],
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',[ "clean:dist", "sass", "copy", "watch" ]);
}
