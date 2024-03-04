const Artista = require('../models/crear.model');

exports.get_armar = (request, response, next) => {
    response.render(`armar`);
};

exports.post_armar = (request, response, next) => {
    console.log(request.body);

    const artista = 
        new Artista(request.body.nombre, request.body.imagen, request.body.descripcion);
    artista.save();
  
    response.redirect('/');
};

exports.get_list = (request, response, next) => {
    response.render('visualiza', {
        lista: Artista.fetchAll()
    });
};

exports.get_root = (request, response, next) => {
    response.render(`musica`)
};