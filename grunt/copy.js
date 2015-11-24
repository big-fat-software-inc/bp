module.exports = {
  main: {
    files: [
      {
        expand: true,
        cwd: 'app/',
        src: ['manifest.json'],
        dest: 'dist/'
      },
      {
        expand: true,
        cwd: 'app/',
        src: ['*.png'],
        dest: 'dist/'
      },
      {
        expand: true,
        cwd: 'app/',
        src: ['*.html'],
        dest: 'dist/'
      },
      {
        expand: true,
        cwd: 'app/vendor/bootstrap/dist/fonts/',
        src: ['*.*'],
        dest: 'dist/'
      },
      {
        expand: true,
        cwd: 'app/vendor/',
        src: ['browser.min.js'],
        dest: 'dist/'
      }
    ]
  }
}
