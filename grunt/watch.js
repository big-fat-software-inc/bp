module.exports = {
  scripts: {
    files: ['app/**/*.js', 'app/**/*.html', 'app/**/*.css', 'grunt/**/*.js'],
    tasks: ['default'],
    options: {
      debounceDelay: 1000,
      spawn: false,
      reload: true,
      livereload: true
    }
  }
}