var postcss = require('postcss');
var path    = require('path');

module.exports = {
    input_extensions: [".css"],
        force_compile: true,

    compile: function(input, filename, callback){
      var err;
      var result = postcss([require('autoprefixer')]).process(input).css;
      console.log(result);
      return callback(err, result);
    }

};
