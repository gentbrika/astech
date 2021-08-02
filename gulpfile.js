var gulp = require('gulp');
var sass = require('gulp-sass')(require('node-sass'));
sass.compiler = require('node-sass');
var browserSync = require('browser-sync').create();
 
function style(){
    return gulp.src('./scss/**/*.scss')
    .pipe(sass())    
    .pipe(gulp.dest('./css'))
}
 
function watch() {
   gulp.watch('./scss/**/*.scss', style);
}
 
 
exports.style = style; 
exports.watch = watch;