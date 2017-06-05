// the host can be thought of as the domain name you want to read from,
// and the path is the resource - '/' is the root path, but if you wanted to read a
// particular resource (like '/login/index.html'), that would be defined in the path
const https = require('https');
(function getAndPrintHTMLChunks() {
  var string = '';
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html',
  };
  // notice that https.get takes a callback with one parameter -
  // response, which is a Stream that represents the HTTP response
  https.get(requestOptions, function(response){
    response.setEncoding('UTF8');

    response.on('data', function(data){
      //console.log('Chunk recieved. Length: ', data);
      string += data;

    });
    response.on('end', function(){
      console.log(string);
      console.log('The stream is complete!!');
    });
  });
})();