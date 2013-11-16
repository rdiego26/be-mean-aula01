/**
 * Created by ramos on 10/11/13.
 */
var fs = require("fs");

console.log("Vou ler", Date.now());
console.time("leitura");
// var file = fs.readFileSync("file.zip");

fs.readFile('yamipod-18-32-bits.exe', function(err, data){
    console.log(data);
});

console.timeEnd("leitura");
console.log("Ja li", Date.now());
