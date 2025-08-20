function leerProductosDesdeJSON() {
  return fetch("data/productos.json").then((response) => {
    if (!response.ok) {
      throw new Error("Error al cargar el JSON");
    }
    return response.json();
  });
}

let misProductos = localStorage.getItem("misProductos");
if (misProductos === null) {
  misProductos = [];
  localStorage.setItem("misProductos", JSON.stringify(misProductos));
}

function AgregarAlCarrito(idProducto, quantity) {
  let misProductos = JSON.parse(localStorage.getItem("misProductos")) || [];

  let indiceProducto = misProductos.findIndex(
    (item) => Number(item.producto.id) === Number(idProducto)
  );

  if (Number(quantity) < 0) {
    quantity = 0;
  }

  if (indiceProducto >= 0) {
    misProductos[indiceProducto].cantidad =
      misProductos[indiceProducto].cantidad + Number(quantity);
    localStorage.setItem("misProductos", JSON.stringify(misProductos));
    setearCantidad(misProductos);
  } else {
    leerProductosDesdeJSON().then((listaProductos) => {
      const index = listaProductos.findIndex(
        (producto) => producto.id === Number(idProducto)
      );

      misProductos.push({
        cantidad: Number(quantity),
        producto: listaProductos[index],
      });
      localStorage.setItem("misProductos", JSON.stringify(misProductos));
      setearCantidad(misProductos);
    });
  }

  CargarCarrito();
}

function obtenerCantidadTotal(misProductos) {
  let total = 0;
  let precioTotal = 0;
  misProductos = JSON.parse(localStorage.getItem("misProductos")) || [];
  misProductos.forEach((element) => {
    total = total + element.cantidad;
    precioTotal = precioTotal + element.producto.precio * element.cantidad;
  });
  return { cantidadTotal: total, precioTotal: Number(precioTotal) };
}

function setearCantidad(misProductos) {
  let totales = {};
  if (misProductos) {
    totales = obtenerCantidadTotal(misProductos);
  } else {
    totales = { cantidadTotal: 0, precioTotal: 0 };
  }

  const menuQuantity = document.querySelector(".menu-quantity");
  menuQuantity.innerHTML = totales.cantidadTotal;

  if (totales.cantidadTotal == 0) {
    menuQuantity.classList.add("hide");
  } else {
    menuQuantity.classList.remove("hide");
  }
}

function CargarCarrito() {
  const section = document.querySelector(".cart-product-list");
  let misProductos = JSON.parse(localStorage.getItem("misProductos")) || [];

  console.log(misProductos);

  const arrayProductos = misProductos.map(
    (item) => `<div class="cart-product-item">
                <div class="cart-product-img">
                <img src="./images/${item.producto.imagenThumb}.png" alt="${item.producto.alt}">
                </div>
                <div class="cart-product-name">
                <p>producto: ${item.producto.nombre}</p>
                <p>cantidad: ${item.cantidad}</p>
                </div>
            </div>`
  );

  section.innerHTML = arrayProductos.join("");

  let totales = obtenerCantidadTotal();
  let spanTotal = document.querySelector(".precioTotal");
  spanTotal.innerHTML = `$ ${Number(totales.precioTotal)}`;
}

const btnCart = document.querySelector(".btn-cart");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector(".close-cart");

btnCart.addEventListener("click", () => {
  cart.classList.add("active");
  CargarCarrito();
});

closeCart.addEventListener("click", () => {
  cart.classList.remove("active");
});

const clear = document.querySelector(".clear");
clear.addEventListener("click", function () {
  limpiarCarrito();
  CargarCarrito();

  Swal.fire({
    title: "¡Carrito vacío!",
    icon: "info",
  });
});

function limpiarCarrito() {
  let misProductos = [];
  localStorage.setItem("misProductos", JSON.stringify(misProductos));
  setearCantidad(misProductos);
}

const buyBtn = document.querySelector(".buy-btn");
buyBtn.addEventListener("click", function () {
  let misProductos = JSON.parse(localStorage.getItem("misProductos")) || [];
  if (misProductos.length == 0) {
    Swal.fire({
      title: "Error",
      text: "¡Carrito vacío!",
      icon: "error",
    });
    return;
  }

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });
  swalWithBootstrapButtons
    .fire({
      title: "Realizar pago",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Aprobar",
      cancelButtonText: "Rechazar",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire({
          title: "Pago aprobado!",
          text: "Los productos seran enviados.",
          icon: "success",
        });
        limpiarCarrito();
        cart.classList.remove("active");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire({
          title: "Pago rechazado",
          text: "Fondos insuficientes",
          icon: "error",
        });
      }
    });
});

setearCantidad(JSON.parse(misProductos));
