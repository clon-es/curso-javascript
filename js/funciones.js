const clear = document.querySelector(".clear");
clear.addEventListener("click", function () {
  let misProductos = [];
  localStorage.setItem("misProductos", JSON.stringify(misProductos));
  setearCantidad(misProductos);
});

function obtenerCantidadTotal(misProductos) {
  let total = 0;
  let precioTotal = 0;
  misProductos.forEach((element) => {
    total = total + element.cantidad;
    precioTotal = precioTotal + element.precio * element.cantidad;
  });
  return { cantidadTotal: total, precioTotal: precioTotal };
}

function setearCantidad(misProductos) {
  const menuQuantity = document.querySelector(".menu-quantity");
  const totales = obtenerCantidadTotal(misProductos);
  menuQuantity.innerHTML = totales.cantidadTotal;
  if (totales.cantidadTotal == 0) {
    menuQuantity.classList.add("hide");
  } else {
    menuQuantity.classList.remove("hide");
  }
}
