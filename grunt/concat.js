module.exports = {
  options: {
    separator: '\n',
    // process: function(src, filepath) {
    //   console.log( "found:" + filepath );
    // }
  },
  dev: {
    files: {
      'dist/dist.my.js': [
          'app/vendor/react/react.min.js',
          'app/vendor/react/react-dom.min.js',
          'app/vendor/jquery/dist/jquery.min.js',
          'app/vendor/bootstrap/dist/js/bootstrap.min.js',
        ],

        'dist/dist.main.js': [
          'app/components/**/*.js',
          'app/screens/**/*.js',
          'app/main.js'
        ],

        'dist/watch-dog.js': ['app/watch-dog.js'],
        

      'dist/bootstrap.plus.theme.min.css': [
          'app/vendor/bootstrap/dist/css/bootstrap.min.css',
          'app/vendor/bootstrap/dist/css/bootstrap-theme.min.css',
        ],

      'dist/dist.my.css': [ 'app/*.css' ]
    }
  }
}
