module.exports = function (grunt) {

  // configuration
  grunt.initConfig({
    plato: {
      coverage: {
        options : {
          jshint : grunt.file.readJSON('.jshintrc')
        },
        files: {
          'public/tests/coverage': [
            'index.js',
            'public/main.js'
          ]
        }
      }
    }
  });


  grunt.loadNpmTasks('grunt-plato');
};
