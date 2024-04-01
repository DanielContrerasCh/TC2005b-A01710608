const filesystem = require('fs');
const db = require('../util/database');
let ctr = 1;

module.exports = class Artista {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre, mi_imagen, mi_descripcion, mi_username) {
        this.nombre = mi_nombre;
        this.imagen = mi_imagen;
        this.descripcion = mi_descripcion;
        this.username = mi_username;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto.
    save() {
        let top = `\nartista ${ctr}:\n${this.nombre}\n${this.imagen}\n${this.desc}\n`;
        ctr++;
        filesystem.appendFileSync('Top.txt', top);

        return db.execute('INSERT INTO artistaCreado (nombre, imagen, descripcion, username) VALUES (?, ?, ?, ?)',
            [this.nombre, this.imagen, this.descripcion, this.username]
        );
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM artistaCreado');
    }

    static fetchOne(id) {
        return db.execute('SELECT * FROM artistaCreado WHERE id=?', 
        [id]);
    }

    static fetch(id) {
        if (id) {
            return this.fetchOne(id);
        } else {
            return this.fetchAll();
        }
    }

}