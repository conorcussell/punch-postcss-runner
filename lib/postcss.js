var postcss = require('postcss');
var path    = require('path');

module.exports = {
    input_extensions: [".css"],
        force_compile: true,

    compile: function(input, filename, callback){
        var output;
        // call the compiler with the input
        return callback(err, output);
    }

};
