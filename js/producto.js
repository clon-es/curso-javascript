
/*Agregar producto*/
const productoIndividual = document.querySelector(
  ".single-product .single-product__content"
);

const params = new URLSearchParams(window.location.search);
const productoId = params.get("id");
let producto;
leerProductosDesdeJSON().then((productos) => {
  producto = productos.find((p) => p.id === Number(productoId));
    
  const img = document.querySelector(".img");
  img.src = `./images/${producto.imagen}.png`;

  const h1 = document.querySelector("h1");
  h1.textContent = producto.nombre;

  const h4 = document.querySelector("h4");
  h4.textContent = `$ ${producto.precio}`;

  const p = document.querySelector(".descripcion");
  p.textContent = producto.descripcion;
});

const productoButton = document.createElement("button");
productoButton.className = "btn";
productoButton.innerHTML = "Agregar producto";

productoButton.onclick = function () {
    const quantity = document.querySelector(".quantity").value;
    AgregarAlCarrito(producto.id, quantity);
};

productoIndividual.appendChild(productoButton);

/*Agregar producto*/