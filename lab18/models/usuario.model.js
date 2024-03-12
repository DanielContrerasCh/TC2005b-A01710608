const db = require('../util/database');

module.exports = class Artista {
    static fetchOne(username, password) {
        return db.execute 
            ('SELECT * FROM usuario WHERE username=?',
            [username]);
    }

    static getPermisos(username) {
        return db.execute (
            `SELECT funcion
            FROM usuario u, asigna a, rol r, posee p, permios per
            WHERE u.username = ? AND u.username = a.username
            AND a.idrol = r.id AND r.id = p.idrol
            AND p.idpermiso = per.id`,
            [username]
        );
    }
}
