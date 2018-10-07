var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('copy', function() {
  gulp.src([
      'source/images/*.png',
      'source/images/**/*.png',
      'source/images/*.jpg',
      'source/images/**/*.jpg',
    //   'source/images/*.svg',
    //   'source/images/**/*.svg',
      '!source/images/sprite/*',
      '!source/images/sprite/'
  ])
    .pipe(imagemin())
    .pipe(gulp.dest('build/img'))
    .pipe(gulp.dest('img'));

  gulp.src([
      'source/fonts/*.woff'
  ])
    .pipe(gulp.dest('build/fonts'))
    .pipe(gulp.dest('fonts'));
});
