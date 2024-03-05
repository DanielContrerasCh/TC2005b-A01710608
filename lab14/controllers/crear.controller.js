const Artista = require('../models/crear.model');

exports.get_armar = (request, response, next) => {
    response.render(`armar`, {
        username: request.session.username || '',
    });
};

exports.post_armar = (request, response, next) => {

    console.log(request.body);

    const artista = 
        new Artista(request.body.nombre, request.body.imagen, request.body.descripcion);
    artista.save();
    
    response.setHeader('Set-Cookie', 'ultimo_artista =' + request.body.nombre + ';HttpOnly');
    response.redirect('/');
};

exports.get_list = (request, response, next) => {
    let ultimo_artista = request.get('Cookie');
    if (ultimo_artista) {
        ultimo_artista = ultimo_artista.split('=')[1];
    } else {
        ultimo_artista = '';
    }

    response.render('visualiza', {
        lista: Artista.fetchAll(),
        ultimo_artista: ultimo_artista,
        username: request.session.username || '',
    });
};

exports.get_root = (request, response, next) => {
    response.render(`musica`, {
        username: request.session.username || '',
    })
};