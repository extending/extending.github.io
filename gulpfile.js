'use strict';
var gulp = require('gulp');
var browserSync = require('browser-sync').create();//请求浏览器同步打开组件

//浏览器自动打开
gulp.task('server',function() {
	browserSync.init({
		server:{
			baseDir:'./',
		},
		open:'external',
		startPath:'/'
	});

	gulp.watch('*.html').on('change',browserSync.reload)
})

//默认任务
gulp.task('default',['server']);