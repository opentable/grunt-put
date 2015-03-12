module.exports = function(grunt){
    var request = require('request'),
        fs = require('fs');

    grunt.registerMultiTask('put', function(){
      var done = this.async();
      var options = this.options({});

      grunt.verbose.writeflags(options);

      var filestream = fs.createReadStream(options.filename).pipe(
        request({
          url: options.destination,
          method: 'PUT',
          headers: options.headers
        }).on('error', function(err){
          done(err);
        }).on('response', function(response){
          grunt.verbose.writeln(JSON.stringify(response));
          done(response.statusCode > 400 ? new Error("got a failure status code: " + response.statusCode) : undefined);
        })
      );
    });
};
