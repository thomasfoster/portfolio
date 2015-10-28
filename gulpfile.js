'use strict';
 
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	browserSync = require('browser-sync').create(),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant');

// Compile Sass
gulp.task('sass', function () {
  return gulp.src('./app/scss/**/*.scss')
	.pipe(sass().on('error', sass.logError))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./app/css'))
    .pipe(autoprefixer({
		browsers: ['last 3 versions'],
		cascade: false
	}))
    .pipe(browserSync.stream());
});

// Imagemin

gulp.task('imagemin', function () {
    return gulp.src('app/images-raw/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('app/images'));
});

gulp.task('bowerimport', function(){
	return gulp.src('bower_components/**/*.*')
		gulp.dest('./app')	
})

// Browser Sync
// Static server
gulp.task('serve', ['sass', 'imagemin', 'bowerimport'], function() {
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
// Serve contains watch tasks.

// Default Task
gulp.task('default', ['serve']);