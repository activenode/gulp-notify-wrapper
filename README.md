# gulp-notify-wrapper
A tiny wrapper for default Notifications on Builds


## Documentation


### Obvious: Require it!
    var notifyWrapper = require('gulp-notify-wrapper');


### Success Notifications
    gulp.task('default', function(){
        return gulp.src('./js/*.js')
            .pipe(concat('concat.js'))
            .pipe(notifyWrapper.compile.success())
            .pipe(gulp.dest('./compiled-js))
    });
    



### Error Notifications
#### With plumber errorHandling (simple!)
    gulp.task('default', function(){
        return gulp.src('./js/*.js')
            .pipe(plumber(notifyWrapper.compile.error()))
            .pipe(concat('concat.js'))
            .pipe(gulp.dest('./compiled-js));
    });
    
#### Without plumber error handling
    gulp.task('default', function(){
        return gulp.src('./js/*.js')
            .pipe(notifyWrapper.compile.error().errorHandler)
            .pipe(concat('concat.js'))
            .pipe(gulp.dest('./compiled-js));
    });


