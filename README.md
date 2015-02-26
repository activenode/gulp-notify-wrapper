# gulp-notify-wrapper
A tiny wrapper for default Notifications on Builds


## Documentation
Learning by examples:


### Success Notifications
    gulp.task('default', function(){
        return gulp.src('./js/*.js')
            .pipe(concat('concat.js'))
            .pipe(notifyWrapper.compileSuccess)
            .pipe(gulp.dest('./compiled-js))
    });
    



### Error Notifications
#### With plumber errorHandling (simple!)
    gulp.task('default', function(){
        return gulp.src('./js/*.js')
            .pipe(plumber(notifyWrapper.fileCompileError))
            .pipe(concat('concat.js'))
            .pipe(gulp.dest('./compiled-js));
    });
    
#### Without plumber error handling
    gulp.task('default', function(){
        return gulp.src('./js/*.js')
            .pipe(notifyWrapper.fileCompileError.errorHandler)
            .pipe(concat('concat.js'))
            .pipe(gulp.dest('./compiled-js));
    });


