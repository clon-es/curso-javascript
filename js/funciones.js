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

const btnCart = document.querySelector(".btn-cart");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector(".close-cart");

btnCart.addEventListener("click", () => {
  cart.classList.add("active");

  const section = document.querySelector(".cart-product-list");
  const arrayProductos = productos.map(
    (producto) => `<div class="cart-product-item">
              <div class="cart-product-img">
                <img src="./images/${producto.imagenThumb}.png" alt="${producto.alt}">
              </div>
              <div class="cart-product-name">
                <p>${producto.nombre}</p>
              </div>
            </div>`
  );

  section.innerHTML = arrayProductos.join("");
});

closeCart.addEventListener("click", () => {
  cart.classList.remove("active");
});
