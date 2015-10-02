'use strict';

module.exports = function (opts) {

	if (!opts.src || !opts.dest) return;

	var gulp = require('gulp'),
		plumber = require('gulp-plumber'),
		uglify = require('gulp-uglify'),
		modernizr = require('gulp-modernizr');

	gulp.task('modernizr-build', function() {
		return gulp.src(opts.src)
			.pipe(plumber({
                handleError: function(err) {
                    console.log(err);
                    this.emit('end');
                }
            }))
            .pipe(modernizr())
            .pipe(uglify())
            .pipe(gulp.dest(opts.dest))
	});
};