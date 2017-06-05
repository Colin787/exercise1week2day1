const https = require('https');

const step5 = require('./step5.js')
function printHTML(html){
  console.log(html);
}
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html',
};
step5(requestOptions, printHTML);
