const confirmaBoton = document.getElementById("confirmar");
const precioSandalias = 4;
const precioCoqutea = 400;
const precioYeezy = 800;
let totalFinal = 0;

function incremento(itemId) {
  let cantElement = document.getElementById("cantidad" + itemId);
  let cant = parseInt(cantElement.innerText);
  cant = cant + 1
  cantElement.innerText = cant;

  let botonmenos = document.getElementById("menos" + itemId);

  if(cant != 1){
      botonmenos.removeAttribute("disabled");
  }
}

function decremento(itemId) {
  let cantElement = document.getElementById("cantidad" + itemId);
  let cant = parseInt(cantElement.innerText);
  cant = cant - 1;
  cantElement.innerText = cant;

  let botonMenos = document.getElementById("menos" + itemId);

  if (cant === 1) {
    botonMenos.setAttribute("disabled", "");
  }
}



function total(precioTotal){
  totalFinal = totalFinal + precioTotal;
  let contTotal = document.getElementById("total");
  contTotal.textContent = "$" + totalFinal + ".00 MXN"
}

function agregarAlCarrito(itemId, precio) {
  let contElement = document.getElementById("cantidad" + itemId);
  let quant = parseInt(contElement.innerText);
  let escribeCantidad = document.getElementById("item" + itemId);
  let escribePrecio = document.getElementById("precio" + itemId);

  let precioTotal = precio * quant;
  escribeCantidad.textContent = "Cantidad: " + quant;
  escribePrecio.textContent = "Precio: $" + precioTotal + ".00 MXN";
  total(precioTotal);
}

document.getElementById("confirmar1").addEventListener("click", function() {
  agregarAlCarrito(1, precioSandalias);
});
document.getElementById("confirmar2").addEventListener("click", function() {
  agregarAlCarrito(2, precioCoqutea);
});
document.getElementById("confirmar3").addEventListener("click", function() {
  agregarAlCarrito(3, precioYeezy);
});