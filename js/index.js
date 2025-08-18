/*Cargar productos*/
leerProductosDesdeJSON().then((productos) => {
  const section = document.querySelector(".products__container");
  const arrayProductos = productos.map(
    (producto) => `<div class="card">
			<img class=card-image src="./images/${producto.imagen}.png" alt="${producto.alt}" />
			<div class="card-content">
				<h2 class="card-title">${producto.nombre}</h2>
        <h3 class="card-price">$${producto.precio}</h3>
        <div class="card-content-btn">
          <a class="btn add-cart-btn" data-id="${producto.id}" href="#">Agregar al carrito</a>
          <a class="btn" href="./producto.html?id=${producto.id}"> Ver más</a>
        </div>
			</div>
		</div>`
  );

  section.innerHTML = arrayProductos.join("");

  const botonesAgregar = document.querySelectorAll(".add-cart-btn");

    botonesAgregar.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            e.preventDefault(); 
            const idProducto = boton.dataset.id;
            AgregarAlCarrito(idProducto, 1);
        });
    });

});



/*Cargar productos*/