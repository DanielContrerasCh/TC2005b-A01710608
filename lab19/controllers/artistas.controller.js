
exports.get_artista1 = (request, response, next) => {
    response.render(`artista1`, {
        username: request.session.username || '',
    });
};

exports.get_artista2 = (request, response, next) => {
    response.render(`artista2`, {
        username: request.session.username || '',
    });
};

exports.get_artista3 = (request, response, next) => {
    response.render(`artista3`, {
        username: request.session.username || '',
    });
};