const db = require('../util/database');

module.exports = class Usuario {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_username, mi_password) {
        this.username = mi_username;
        this.password = mi_password;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto.
    save() {
        return db.execute('INSERT INTO usuario (username, password) VALUES (?, ?)',
            [this.username, this.password]
        );
    }

    static fetchOne(username, password) {
        return db.execute('SELECT * FROM usuario WHERE username=? AND password=?', 
        [username, password]);
    }
}