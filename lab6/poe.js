const confirmaBoton = document.getElementById("confirmar");
const precioSandalias = 4;
const precioCoqutea = 400;
const precioYeezy = 800;
let cant = 1;

function incremento() {
  cant = cant + 1
  document.getElementById("cantidad1").innerText = cant;
  let botonmenos = document.getElementById("menos");

  if(cant != 1){
      botonmenos.removeAttribute("disabled");
  }
}

function decremento() {

  cant = cant - 1;
  document.getElementById("cantidad1").innerText = cant;
  let botonmenos = document.getElementById("menos");

  if(cant == 1){
      botonmenos.setAttribute('disabled', '');
  }
}

function agregarAlCarrito() {
  const cont1 = document.getElementById("cantidad1");
  const quantSand = parseInt(cont1.innerText);
  const escribeCantidad = document.getElementById("item1");
  const escribePrecio = document.getElementById("precio1");

  let precio = precioSandalias * quantSand;
  console.log(precio);
  escribeCantidad.textContent = "Cantidad: " + quantSand;
  escribePrecio.textContent = "Precio: $" + precio + ".00 MXN";

}

confirmaBoton.addEventListener('click', agregarAlCarrito);


