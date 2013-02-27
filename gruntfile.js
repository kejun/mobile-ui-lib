module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'dist/mobile-ui.css': ['*.scss']
        }
      }
    },
    watch: {
      files: ['*.scss'],
      tasks: ['sass']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['sass']);
};
