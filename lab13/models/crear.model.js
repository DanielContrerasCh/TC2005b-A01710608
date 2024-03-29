const filesystem = require('fs');
let ctr = 1;

const lista = [{
    nombre: "Aquí empieza tu top", 
    imagen: "https://cdn-icons-png.flaticon.com/512/44/44522.png",
    descripcion: "Empieza a añadir tus artistas en la página de `Armar tu propio Top`"
}];

module.exports = class Artista {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre, mi_imagen, mi_descripcion) {
        this.nombre = mi_nombre;
        this.imagen = mi_imagen;
        this.descripcion = mi_descripcion;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto.
    save() {
        lista.push({
            nombre: this.nombre,
            imagen: this.imagen,
            descripcion: this.descripcion
        });

        let top = `\nartista ${ctr}:\n${this.nombre}\n${this.imagen}\n${this.desc}\n`;
        ctr++;
        filesystem.appendFileSync('Top.txt', top);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return lista;
    }

}