module.exports = function ( grunt ) {
  grunt.registerTask('build', function( targetEnvironment ) {
    switch (targetEnvironment) {
      case 'dev':
      case 'development':
      case '':
      default:
       // grunt.task.run(['clean:dist', 'concat:dev', 'requirejs', 'filerev', 'copy', 'json_generator', 'watch']);
       grunt.task.run(['clean:dist', 'concat:dev', 'copy', 'babel', 'watch']);
    }
  });
}
