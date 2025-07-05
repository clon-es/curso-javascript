const PRODUCTOS = [
  {
    nombre: "auricular1",
    precio: 100,
  },
  {
    nombre: "auricular2",
    precio: 500,
  },
  {
    nombre: "auricular3",
    precio: 800,
  },
];

function mostrarProductos() {
  const auricular1 =
    "1 - " + PRODUCTOS[0].nombre + " - $ " + PRODUCTOS[0].precio + "\n";
  const auricular2 =
    "2 - " + PRODUCTOS[1].nombre + " - $ " + PRODUCTOS[1].precio + "\n";
  const auricular3 =
    "3 - " + PRODUCTOS[2].nombre + " - $ " + PRODUCTOS[2].precio + "\n";

  let indiceProductoElegido = prompt(
    "Elige el producto: \n" + auricular1 + auricular2 + auricular3
  );
  console.log(indiceProductoElegido);

  if (indiceProductoElegido == null) {
    alert("Fin de la compra");
  } else {
    switch (indiceProductoElegido) {
      case "1":
        compraExitosa(PRODUCTOS[0]);
        break;
      case "2":
        compraExitosa(PRODUCTOS[1]);
        break;
      case "3":
        compraExitosa(PRODUCTOS[2]);
        break;
      default:
        error();
        break;
    }
  }
}

function error() {
  alert("Producto inexistente");
}

function compraExitosa(producto) {
  alert("Gracias por tu compra del producto: " + producto.nombre);
}

mostrarProductos();
