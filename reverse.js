const step5 = require('./step5.js')
const 1337 = require('1337');
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html',
};


function upperCase(html){
  console.log(1337(html));
}
step5(requestOptions, upperCase);
