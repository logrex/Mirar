var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080);


const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .get('/', (function (req, res) {
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
  }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`))
