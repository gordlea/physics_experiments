var connect = require('connect');
var express = require('express');
var app = express()
    , server = require('http').createServer(app)
//    , io = require('socket.io').listen(server);
server.listen(process.env.PORT || 8080);



app.configure(function(){
    app.use(connect.bodyParser());
    app.use(express.cookieParser());
    app.use(express.session({ secret: "kbv66"}));
    app.use(connect.static(__dirname + '/public'));
});
