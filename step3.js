const https = require('https');
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html',
};
(function getAndPrintHTMLChunks(option) {
  var string = '';
  // notice that https.get takes a callback with one parameter -
  // response, which is a Stream that represents the HTTP response
  https.get(option, function(response){
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
})(requestOptions);