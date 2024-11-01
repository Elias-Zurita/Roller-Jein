window.sr = ScrollReveal();

// HEADER
sr.reveal(".navbar", {
  duration: 3000,
  reset: false,
  origin: "top",
  distance: "100px",
  mobile: false,
});

// TEXTO HOME
sr.reveal(".textoHome", {
  duration: 3000,
  origin: "right",
  distance: "-20%",
  reset: false,
  mobile: false,
});
sr.reveal(".textoHome", {
  // mobile
  duration: 3000,
  origin: "right",
  distance: "-20%",
  reset: false,
  mobile: true,
  desktop: false,
});

// COTIZADOR
sr.reveal(".seccionCotiza", {
  opacity: null,
  duration: 3000,
  rotate: {
    x: 90,
    z: 360,
  },
  reset: false,
  mobile: false,
});
sr.reveal(".seccionCotiza", {
  // mobile
  opacity: null,
  duration: 3000,
  rotate: {
    x: 90,
    z: 360,
  },
  reset: false,
  mobile: true,
  desktop: false,
});

// PRODUCTOS HOME
sr.reveal(".seccionProductosHome", {
  duration: 3000,
  scale: 1.1,
  reset: false,
  mobile: false,
});
sr.reveal(".seccionProductosHome", {
  // mobile
  duration: 3000,
  scale: 1.1,
  reset: false,
  mobile: true,
  desktop: false,
});

// SERVICIOS
sr.reveal(".seccionServicios", {
  delay: 200,
  duration: 2000,
  origin: "left",
  distance: "-30%",
  mobile: false,
  reset: false,
});
sr.reveal(".seccionServicios", {
  // mobile
  delay: 0,
  desktop: false,
  reset: false,
  mobile: true,
  desktop: false,
});

// VIRTUDES
sr.reveal(".virtudesAgencia", {
  duration: 3000,
  scale: 1.1,
  reset: false,
  mobile: false,
});
sr.reveal(".virtudesAgencia", {
  // mobile
  duration: 3000,
  scale: 1.1,
  reset: false,
  mobile: true,
  desktop: false,
});

// EXPERIENCIA
sr.reveal(".cajaSomosDistintos", {
  duration: 3000,
  origin: "right",
  distance: "-20%",
  reset: false,
  mobile: false,
});
sr.reveal(".cajaSomosDistintos", {
  // mobile
  duration: 3000,
  origin: "right",
  distance: "-20%",
  reset: false,
  mobile: true,
  desktop: false,
});

sr.reveal(".cajaTrofeo", {
  duration: 3000,
  origin: "left",
  distance: "-20%",
  reset: false,
  mobile: false,
});
sr.reveal(".cajaTrofeo", {
  // mobile
  duration: 3000,
  origin: "left",
  distance: "-20%",
  reset: false,
  mobile: true,
  desktop: false,
});

// Detalle del producto
sr.reveal(".detalleProducto", {
  duration: 3000,
  origin: "right",
  distance: "-20%",
  reset: false,
  mobile: false,
});
sr.reveal(".detalleProducto", {
  // mobile
  duration: 3000,
  origin: "right",
  distance: "-20%",
  reset: false,
  mobile: true,
  desktop: false,
});

// Imagenes productos
sr.reveal(".cajaImagenesModelos", {
  duration: 3000,
  scale: 1.1,
  reset: false,
  mobile: false,
});
sr.reveal(".cajaImagenesModelos", {
  // mobile
  duration: 3000,
  scale: 1.1,
  reset: false,
  mobile: true,
  desktop: false,
});