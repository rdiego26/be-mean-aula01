/**
 * Created by ramos on 10/11/13.
 */
var http = require("http");
var port = 3000;


http.createServer(function(req, res) {
    res.writeHead(200,
        {"Content-Type": "text/html"});
    res.write("<h2>Hello World</h2>");
    res.end();
}).listen( port );

console.log('Servidor rodando na porta ' + port);