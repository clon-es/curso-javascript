const PRODUCTOS = [
  {
    id: 1,
    nombre: "auricular1",
    precio: 100,
    imagen: "auricular1",
    alt: "auricular",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    nombre: "auricular2",
    precio: 350,
    imagen: "auricular2",
    alt: "auricular",
    descripcion:
      "Etiam scelerisque lacinia blandit. Vivamus ut eros et nisl laoreet tempus a ultricies nibh. Nullam sed cursus elit.",
  },
  {
    id: 3,
    nombre: "auricular3",
    precio: 600,
    imagen: "auricular3",
    alt: "auricular",
    descripcion:
      "Etiam non lobortis neque. Etiam posuere lacinia urna et pulvinar.",
  },
  {
    id: 4,
    nombre: "auricular4",
    precio: 890,
    imagen: "auricular4",
    alt: "auricular",
    descripcion:
      " Ut vitae nibh risus. Phasellus a vulputate nulla. Sed pharetra tempor dui varius pretium.",
  },
];

localStorage.setItem("productos", JSON.stringify(PRODUCTOS));
let misProductos = localStorage.getItem("misProductos");
console.log(misProductos);
if (misProductos === null) {
  misProductos = [];
  localStorage.setItem("misProductos", JSON.stringify(misProductos));
}
console.log(typeof misProductos);
setearCantidad(JSON.parse(misProductos));

function mostrarProductos() {
  const section = document.querySelector(".products__container");
  const arrayProductos = PRODUCTOS.map(
    (producto) => `<div class="card">
			<img class=card-image src="./images/${producto.imagen}.png" alt="${producto.alt}" />
			<div class="card-content">
				<h2 class="card-title">${producto.nombre}</h2>
        <h3 class="card-price">$${producto.precio}</h3>
				<a class="btn" href="./producto.html?id=${producto.id}">
					Ver más
				</a>
			</div>
		</div>`
  );

  section.innerHTML = arrayProductos.join("");
}

mostrarProductos();

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
