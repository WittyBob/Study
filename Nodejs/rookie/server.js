// var http = require('http');
// var url = require('url');

// function start() {
//   function onRequest(req, res) {
//     var pathname = url.parse(req.url).pathname;

//     console.log(pathname);
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.write('xxxx');
//     res.end();
//   }
//   http.createServer(onRequest).listen(8888);
//   console.log('Server has started');
// }

// module.exports.start = start;

var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})