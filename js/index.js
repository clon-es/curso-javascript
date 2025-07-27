let misProductos = localStorage.getItem("misProductos");
if (misProductos === null) {
  misProductos = [];
  localStorage.setItem("misProductos", JSON.stringify(misProductos));
}
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
