var gulp = require('gulp');
var open = require('gulp-open');
var clean = require('gulp-clean');
var gulpif = require('gulp-if');
var concat = require('gulp-concat');
var stylus = require('gulp-stylus');
var minifyCSS = require('gulp-minify-css');
var livereload = require('gulp-livereload');

gulp.task('styles', function () {
    gulp.src([
            './styles/vendor/*.css',
            './styles/source/*.styl'
        ])
        .pipe(gulpif(/[.]styl$/, stylus()))
        .pipe(concat('index.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./styles'));
});

gulp.task('open', function () {
    gulp.src('./index.html')
    .pipe(open('<%file.path%>'));
});

gulp.task('watch', function() {
    var server = livereload();

    gulp.watch('./styles/source/*.styl', ['styles']);

    gulp.watch('./index.html').on('change', function(file) {
        server.changed(file.path);
    });

    gulp.watch('./styles/*.css').on('change', function(file) {
        server.changed(file.path);
    });
});

gulp.task('default', ['styles', 'watch', 'open']);
