'use strict';
let gulp = require('gulp');//引入gulp
let del = require('del');//引入删除文件
let imagemin = require('gulp-imagemin');
let pngquant = require('imagemin-pngquant');
let htmlmin = require('gulp-htmlmin');
let $ = require('gulp-load-plugins')();
let less = require('gulp-less');
const babel=require('gulp-babel');
gulp.task('publicLess', function () {
    gulp.src('components/style/jw-components-mobile.less')
        .pipe(less())
        .pipe(gulp.dest('dist'));
});
gulp.task('testLess', function () {  
    gulp.src('components/**/*.less') 
        .pipe(less())
        .pipe(gulp.dest('components/'));
});

gulp.task('js',()=>{
  return gulp.src('components/**/*.js')
  		 .pipe(babel())
  		 .pipe(gulp.dest("lib"));
})

gulp.task('css',()=>{
  return gulp.src('components/**/*.less')
  		 .pipe(less())
  		 .pipe(gulp.dest("lib"));
})

gulp.task('less',()=>{
  return gulp.src('components/**/*.less')
  		 .pipe(gulp.dest("lib"));
})

gulp.task('default',["publicLess","testLess","css","js","less"],function(){
  gulp.watch(['components/**/index.less','components/**/*.js'],['publicLess','testLess',"css","js","less"]);
});







