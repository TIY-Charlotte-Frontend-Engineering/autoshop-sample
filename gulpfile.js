let gulp = require('gulp');
let browser = require('gulp-browser');

gulp.task('default', ['html', 'js']);

gulp.task('html', function () {
    return gulp.src('index.html')
        .pipe(gulp.dest('public'));
});

gulp.task('js', function () {
    return gulp.src('js/app.js')
        .pipe(browser.browserify())
        .pipe(gulp.dest('public'));
});