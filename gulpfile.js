var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass')(require('sass'));

// Static Server + watching scss/html files
gulp.task('serve', function() {

  browserSync.init({
      server: "./public"
  });

  gulp.watch("app/scss/**/*.scss", gulp.series('sass'));
  gulp.watch("public/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src("app/scss/styles.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("public/css"))
    .pipe(browserSync.stream());
});

gulp.task('default', gulp.series('sass', 'serve'));