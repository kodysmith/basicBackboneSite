
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/**/*.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    connect: {
	    server: {
	      options: {
	        port: 9001,
	        base: 'src',
	        keepalive:true
	      }
	    }
	  },
	less: {
		dev: {
			files: [

				{ src: ['**/screen.less'], dest: 'src/css/min/', expand: true, cwd: 'src/css', ext:'.css'}
			],
			options: {
				//paths: ["assets/css"],
				
			},
		}
	},
  sass: {
    dist: {                            // Target
      options: {                       // Target options
        style: 'expanded'
      },
      files: {                         // Dictionary of files
        'src/css/styles.css': 'src/css/screen.scss',       // 'destination': 'source'
      }
    }
  },
	watch: {
        files: "./src/css/**/*",
        tasks: ["less"]
    },
  gitclone: {
    matrix: {
      options: {
        repository: "http://github.com/kodysmith/matrixDropAnimation",
        directory: "app-matrixAnimation",
        branch: "master",
        force: true
        // Target-specific options go here.
      }
    },
    lydia: {
      options: {
        repository: "http://github.com/kodysmith/lydiaNelsen",
        directory: "app-lydia",
        branch: "master",
        force: true
        // Target-specific options go here.
      }
    },
    searchProject: {
      options: {
        repository: "http://github.com/kodysmith/searchProject",
        directory: "app-movieSearch",
        branch: "master",
        force: true
        // Target-specific options go here.
      }
    }
  }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-git');
  grunt.loadNpmTasks('grunt-contrib-sass');
  
  grunt.registerTask('compile', ['sass']);
  grunt.registerTask('server',['connect']);
  grunt.registerTask('setup',['gitclone:matrix','gitclone:lydia','gitclone:searchProject']);
  // Default task(s).
  grunt.registerTask('default', ['sass', 'connect']);

};