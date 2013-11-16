/**
 * Created by ramos on 10/11/13.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', function(err){
    console.log('Erro de conexao.', err)
});
db.once('open', function () {
    console.log('Conexão aberta.')
});


var Cat = mongoose.model('Cat', { name: String, age: Number });

var kitty = new Cat({ name: 'Arnaldo', age: 5 });
kitty.save(function (err) {
    if (err) // ...
        console.log('meow');
    else
        console.log('Cadastrado!');
});
