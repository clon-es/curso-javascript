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
