var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
 
gulp.task('mini', function(){
  return gulp.srgulp.src('src/html/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./dist/html'));
});