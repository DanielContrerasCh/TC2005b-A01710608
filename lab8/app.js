const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const str = "Hola este es el ejercicio dos, este texto será escrito en ej.txt";


function prom(arr) {
    let res = 0;
    for(let i of arr){
        res = res + i;
    }
    res = res / arr.length;
    console.log(res);
}

function wr(str){
    const filesystem = require('fs');
    filesystem.writeFileSync('ej.txt.txt', str);
}

prom(arr);
wr(str);