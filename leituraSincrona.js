/**
 * Created by ramos on 10/11/13.
 */
var fs = require("fs");

console.log("Vou ler", Date.now());
console.time("leitura");

var file = fs.readFileSync("yamipod-18-32-bits.exe");
console.log(file);

console.timeEnd("leitura");
console.log("Ja li", Date.now());
