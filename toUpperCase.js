//const https = require('https');
const step5 = require('./step5.js')
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html',
};


function upperCase(html){
  console.log(html.toUpperCase());
}
step5(requestOptions, upperCase);
