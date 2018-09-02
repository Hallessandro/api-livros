var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let livroSchema = new Schema({
    nome: String, 
    autor: String, 
    editora: {
        nome: String, 
        email: String, 
    } 
});

module.exports = mongoose.model("Livro", livroSchema);
