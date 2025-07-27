const params = new URLSearchParams(window.location.search);
const productoId = params.get("id");
const productos = JSON.parse(localStorage.getItem("productos"));

const producto = productos.find((p) => p.id === Number(productoId));

const img = document.querySelector(".img");
img.src = `./images/${producto.imagen}.png`;

const h1 = document.querySelector("h1");
h1.textContent = producto.nombre;

const h4 = document.querySelector("h4");
h4.textContent = `$ ${producto.precio}`;

const p = document.querySelector("p");
p.textContent = producto.descripcion;

let misProductos = localStorage.getItem("misProductos");
setearCantidad(JSON.parse(misProductos));

const productoIndividual = document.querySelector(
  ".single-product .single-product__content"
);

const productoButton = document.createElement("button");
productoButton.className = "btn";
productoButton.innerHTML = "Agregar producto";
productoButton.onclick = function () {
  let misProductos = JSON.parse(localStorage.getItem("misProductos"));
  const indiceProducto = misProductos.findIndex(
    (item) => item.producto.id === producto.id
  );
  const quantity = document.querySelector(".quantity").value;
  if (Number(quantity) < 0) {
    quantity = 0;
  }
  if (indiceProducto >= 0) {
    misProductos[indiceProducto].cantidad =
      misProductos[indiceProducto].cantidad + Number(quantity);
  } else {
    misProductos.push({ cantidad: Number(quantity), producto: producto });
  }
  localStorage.setItem("misProductos", JSON.stringify(misProductos));
  console.log(JSON.parse(localStorage.getItem("misProductos")));
  setearCantidad(misProductos);
};

productoIndividual.appendChild(productoButton);
