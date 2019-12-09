'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');
var prefix = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var uncss = require('gulp-uncss');
var concatCSS = require('gulp-concat-css');
var imagemin = require('gulp-imagemin');

gulp.task('css', function () {
    gulp.src('scss/style.scss')
        .pipe(sass())
        .pipe(rename('bundle.min.css'))
        .pipe(prefix('last 3 versions', '> 1%', 'ie 9'))
        .pipe(gulp.dest('css'))
});

gulp.task('concat', function () {
    gulp.src('css/*.css')
        .pipe(concatCSS('style.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('app/css'))
});

gulp.task('imagemin', function () {
    gulp.src('images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('app/images'))
});


gulp.task('watch', function () {
    gulp.watch('scss/style.scss', ['css']);
    gulp.watch('css/*.css', ['concat']);
});
