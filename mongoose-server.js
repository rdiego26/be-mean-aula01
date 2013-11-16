/**
 * Created by ramos on 10/11/13.
 */
var http = require('http');

var beer = require('./beer');

function callback(req, res, json){
    //console.log(json);
    res.end(JSON.stringify(json));
}

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});

    var url = req.url;
    var method = req.method;

    switch(url){
        case '/beers':
            beer.retrieve({}, function(json){
                res.write( JSON.stringify(json) );
                callback(req, res, json);
            });
            break;

        case '/beers/get/527fe8098a4745a63b000002':
            var query = {_id: '527fe8098a4745a63b000002'};
            beer.retrieve(query, function(json){
                callback(req, res, json);
            });
            break;

        case '/beers/remove/527fde85c803e77632000002':
            var query = {_id: '527fde85c803e77632000002'};
            beer.delete(query, function(json){
                callback(req, res, json);
            });
            break;
    }

    res.end();

}).listen(3000);
console.log(    'Server running at http://localhost:3000/');
