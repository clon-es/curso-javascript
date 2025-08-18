let misProductos = localStorage.getItem("misProductos");
if (misProductos === null) {
  misProductos = [];
  localStorage.setItem("misProductos", JSON.stringify(misProductos));
}
setearCantidad(JSON.parse(misProductos));

function leerProductosDesdeJSON() {
  return fetch("data/productos.json").then((response) => {
    if (!response.ok) {
      throw new Error("Error al cargar el JSON");
    }
    return response.json();
  });
}

leerProductosDesdeJSON().then((productos) => {
  const section = document.querySelector(".products__container");
  const arrayProductos = productos.map(
    (producto) => `<div class="card">
			<img class=card-image src="./images/${producto.imagen}.png" alt="${producto.alt}" />
			<div class="card-content">
				<h2 class="card-title">${producto.nombre}</h2>
        <h3 class="card-price">$${producto.precio}</h3>
        <div class="card-content-btn">
          <a class="btn" href="#">Agregar al carrito</a>
          <a class="btn" href="./producto.html?id=${producto.id}"> Ver más</a>
        </div>
			</div>
		</div>`
  );

  section.innerHTML = arrayProductos.join("");
});
