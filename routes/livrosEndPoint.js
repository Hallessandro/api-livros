var Livro = require('../models/Livro');

module.exports = app => {
    app.get("/livros", (req, res) => {
        Livro.find(function (err, livros) {
            if (err) console.error(err);
            res.json(livros);
        });
    });

    app.post("/livros", (req, res) => {
        let livro = new Livro({
            nome: req.body.nome, 
            autor: req.body.autor, 
            editora: {
                nome: req.body.editora.nome,
                email: req.body.editora.email
            }
        });
        livro.save(function (err, resultado) {
            if (err) res.send(err);

            res.sendStatus("200");
        });
    });

    app.get("/livros/:id", (req, res) => {
        Livro.find({_id: req.params.id}, function(err, resultado){
            if(err) res.send(err);

            res.json(resultado);
        });
    });

    app.put("/livros/:id", (req, res)=> {
        Livro.findByIdAndUpdate(req.params.id, { 
                nome: req.body.nome, 
                autor: req.body.autor, 
                editora: {
                    nome: req.body.editora.nome,
                    email: req.body.editora.email
                }
            }, function(err){
            if(err) res.send(err);
            res.sendStatus("200");
        }); 
    });

    app.delete("/livros/:id", (req, res)=>{
        Usuario.deleteOne({_id: req.params.id}, function(err){
            if(err) res.sendStatus("401");

            res.sendStatus("200");
        });
    });
};

