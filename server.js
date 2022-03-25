//imports
var express = require('express');

//initialize express

var server = express();

//Configure route

server.get('/', function(req, res){
        res.setHeader('Content-Type', 'text/html');
        res.status(200).send('<h1>Hé hé hé The family</h1>');
})

// Start server

server.listen(8080, function(){
    console.log('server en écoute sur le port 8080');
})