var mongoose = require('mongoose');
const url = 'mongodb://localhost/livrosapi';

module.exports = function() {
    mongoose.connect(url, function(err) {
        if(err) throw err;

        console.log("Conectado ao banco com sucesso");
    });
}