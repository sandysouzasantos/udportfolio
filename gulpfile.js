var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    minifyCSS = require('gulp-minify-css'),
    minifyHTML = require('gulp-htmlmin');

gulp.task('scripts', function () {
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('styles', function () {
    gulp.src('css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('minimage', function () {
    gulp.src('img/*.{png,jpg}')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});

gulp.task("htmlmin", function () {
    gulp.src('index.html')
        .pipe(minifyHTML({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));
});

// gulp.task('default', ['scripts', 'styles']);