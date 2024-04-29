// Selecciona el elemento del DOM con el ID 'menu' y lo asigna a la variable 'nav'.
const nav = document.querySelector("#menu");

// Selecciona el elemento del DOM con el ID 'abrir' y lo asigna a la variable 'abrir'.
const abrir = document.querySelector("#abrir");

// Selecciona el elemento del DOM con el ID 'cerrar' y lo asigna a la variable 'cerrar'.
const cerrar = document.querySelector("#cerrar");

// Añade un escuchador de eventos al botón 'abrir' para detectar clics.
abrir.addEventListener("click", () => {
  // Cuando se hace clic en 'abrir', añade la clase 'visible' al menú.
  nav.classList.add("visible");
});

// Añade un escuchador de eventos al botón 'cerrar' para detectar clics.
cerrar.addEventListener("click", () => {
  // Cuando se hace clic en 'cerrar', remueve la clase 'visible' del menú.
  nav.classList.remove("visible");
});
