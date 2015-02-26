var notify = require('gulp-notify');

module.exports.genFileLineBasedCompileError = function() {
    return notify.onError({
        title:    'Error @Line <%= error.lineNumber %>',
        subtitle: '<%= error.fileName %> could not be processed!',
        message:  '<%= error.message %>',
        sound: 'Glass'
    });
};

module.exports.genFileCompileSuccess = function() {
    return notify({
        message: "Generated file: <%= file.relative %>",
        templateOptions: {
            date: new Date()
        }
    });
};


module.exports.fileCompileError = {errorHandler: module.exports.genFileLineBasedCompileError()};
module.exports.compileSuccess = module.exports.genFileCompileSuccess();