// Assigning modules to local variables
var gulp = require('gulp');
var data = require('gulp-data');
var fs = require('fs')
var request = require('request');
var async = require('async')

// Copy Tachyons core files from node_modules to vendor directory
gulp.task('default', ['tachyons-core', 'tachyons-main']);

gulp.task('tachyons-core', function() {
    return gulp.src(['node_modules/tachyons-sass/scss/*.scss'])
        .pipe(gulp.dest('_sass/tachyons-sass/scss/'))
});

gulp.task('tachyons-main', function() {
    return gulp.src(['node_modules/tachyons-sass/tachyons.scss'])
        .pipe(gulp.dest('_sass/tachyons-sass'))
});
