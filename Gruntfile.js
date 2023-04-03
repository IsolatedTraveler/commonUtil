module.exports = function(grunt) {
  grunt.initConfig({
		pkg: grunt.file.readJSON( "package.json" ),
    build: {
      all: {
        
      }
    },
    eslint: {
			options: {
				maxWarnings: 0
			},
      dist: {
				src: [ "dist/**.js"]
			},
      dev: {
        src: [
          "src/**.js"
        ]
      }
    },
    watch: {
      files: ['src/*'],
      tasks: ['default']
    }
  })
  require('load-grunt-tasks')(grunt)
	grunt.loadTasks( "build" );
  grunt.registerTask('default', ['eslint:dev', 'build:*:*'])
}