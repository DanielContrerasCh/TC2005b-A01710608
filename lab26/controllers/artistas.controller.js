
exports.get_artista1 = (request, response, next) => {
    response.render(`artista1`, {
        username: request.session.username || '',
        csrfToken: request.csrfToken(),
        permisos: request.session.permisos || [],
    });
};

exports.get_artista2 = (request, response, next) => {
    response.render(`artista2`, {
        username: request.session.username || '',
        csrfToken: request.csrfToken(),
        permisos: request.session.permisos || [],
    });
};

exports.get_artista3 = (request, response, next) => {
    response.render(`artista3`, {
        username: request.session.username || '',
        csrfToken: request.csrfToken(),
        permisos: request.session.permisos || [],
    });
};

exports.get_root = (request, response, next) => {
    response.render(`musica`, {
        username: request.session.username || '',
        permisos: request.session.permisos || [],
    })
};