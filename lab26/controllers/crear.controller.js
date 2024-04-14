const Artista = require('../models/crear.model');

exports.get_armar = (request, response, next) => {
    response.render(`armar`, {
        username: request.session.username || '',
        csrfToken: request.csrfToken(),
        permisos: request.session.permisos || [],
    });
};

exports.post_armar = (request, response, next) => {

    console.log(request.body);
    console.log(request.file);

    const artista = 
        new Artista(request.body.nombre, request.file.filename, request.body.descripcion, request.body.username);
        
    artista.save().then(([rows, fieldData]) => {
        response.setHeader('Set-Cookie', 'ultimo_artista =' + request.body.nombre + ';HttpOnly');
        response.redirect('/armar/vis');
    })
    .catch(err => {
        console.log(err);
    });;

};

exports.get_list = (request, response, next) => {
    let ultimo_artista = request.get('Cookie');
    if (ultimo_artista) {
        ultimo_artista = ultimo_artista.split('=')[1];
    } else {
        ultimo_artista = '';
    }

    Artista.fetch(request.params.artistaCreado_id).then(([rows, fieldData]) => {
        console.log(rows);
        response.render('visualiza', {
            lista: rows,
            ultimo_artista: ultimo_artista,
            username: request.session.username || '',
            permisos: request.session.permisos || [],
            csrfToken: request.csrfToken(),
        });
    })
    .catch(err => {
        console.log(err);
    });


};

exports.get_buscar = (request, response, next) => {
    Artista.search(request.params.valor_busqueda || '').then(([rows, fieldData]) => {
        response.status(200).json({lista: rows});
    })
    .catch(err => {
        console.log(err);
    });
}

exports.post_delete = (request, response, next) => {
    Artista.delete(request.body.id)
    .then(() => {
        return Artista.fetch(request.params.artistaCreado_id);
    })
    .then(([rows, fieldData]) => {
        return response.status(200).json({lista: rows});
    })
    .catch(err => {
        console.log(err);
    });
}