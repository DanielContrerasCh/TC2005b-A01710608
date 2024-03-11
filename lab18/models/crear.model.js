const filesystem = require('fs');
const db = require('../util/database');
let ctr = 1;

module.exports = class Artista {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre, mi_imagen, mi_descripcion) {
        this.nombre = mi_nombre;
        this.imagen = mi_imagen;
        this.descripcion = mi_descripcion;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto.
    save() {
        let top = `\nartista ${ctr}:\n${this.nombre}\n${this.imagen}\n${this.desc}\n`;
        ctr++;
        filesystem.appendFileSync('Top.txt', top);

        return db.execute('INSERT INTO artistaCreado (nombre, imagen, descripcion, username) VALUES (?, ?, ?, "databasedaniel99")',
            [this.nombre, this.imagen, this.descripcion]
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