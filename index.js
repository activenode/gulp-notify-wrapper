var notify = require('gulp-notify');

function genFileLineBasedCompileError()  {
    return notify.onError({
        title:    'Error @Line <%= error.lineNumber %>',
        subtitle: "<%= error.fileName.replace(/^.*[\\\/]/, '') %> could not be processed!",
        message:  '<%= error.message %>',
        sound: 'Glass'
    });
}

function genFileCompileSuccess() {
    return notify({
        message: "Generated file: <%= file.relative %>",
        templateOptions: {
            date: new Date()
        }
    });
}


module.exports.compile = {
    error: function(noPlumber) {
        if (noPlumber) {
            return genFileLineBasedCompileError();
        } else {
            return {errorHandler: genFileLineBasedCompileError()};
        }
    },
    success: function() {
        return genFileCompileSuccess();
    }
};
