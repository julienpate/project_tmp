var gulp = require('gulp');
var clean = require('gulp-clean');
var less = require('gulp-less');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var watch = require('gulp-watch');

// Gulp clean/delete files or directories 
gulp.task('clean', function () {  
  return gulp.src('dev', {read: false})
    .pipe(clean());
});

// Gulp less>CSS scripts exectution
gulp.task('less', function () {  
  return gulp.src(__dirname+'/dev/less/*.less')
    .pipe(less({
      paths: [ __dirname, 'less', 'includes' ]
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest(__dirname+'/public/css'))
    .on('error', gutil.log);
});

// Gulp js scripts exectution
gulp.task('js', function () {  
  return gulp.src(__dirname+'/dev/js/*.js')
  	.pipe(concat('main.js'))
  	.pipe(uglify())
    .pipe(gulp.dest(__dirname+'/public/main.js'))
    .on('error', gutil.log);
});

// Gulp html scripts exectution
gulp.task('html', function () {  
  return gulp.src(__dirname+'/dev/views/*.html')
  	.pipe(minifyHTML())
    .pipe(gulp.dest(__dirname+'/public/views'))
    .on('error', gutil.log);
});


// Gulp scripts exectution
gulp.task('default',function(){
	gulp.run('less')
	gulp.run('html')
	gulp.watch(__dirname+'/dev/less/*.less',function(){
		gulp.run('less')
	})
	gulp.watch(__dirname+'/dev/js/*.js',function(){
		gulp.run('js')
	})
	gulp.watch(__dirname+'/dev/views/*.html',function(){
		gulp.run('html')
	})
})