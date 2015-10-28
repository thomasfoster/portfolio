'use strict';
 
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	browserSync = require('browser-sync').create();

// Compile Sass
gulp.task('sass', function () {
  return gulp.src('./app/scss/**/*.scss')
	.pipe(autoprefixer({
		browsers: ['last 3 versions'],
		cascade: false
	}))
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./app/css'))
    .pipe(browserSync.stream());
});

// Browser Sync
// Static server
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: {
            baseDir: "./app/"
        }
    });

    gulp.watch("./app/scss/**/*.scss", ['sass']);
    gulp.watch('./app/**/*.css').on('change', browserSync.reload);
    gulp.watch("./app/**/*.html").on('change', browserSync.reload);
    gulp.watch("./app/**/*.js").on('change', browserSync.reload);
});

// Watch Task
//gulp.task('watch', function () {
//  gulp.watch('./app/sass/**/*.scss', ['sass']);
//});

// Default Task
gulp.task('default', ['serve']);