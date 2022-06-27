/* NAV */
const burgerMenuItems = document.querySelector(".burger-menu");
const nav = document.querySelector("nav");
const container = nav.firstElementChild;
const burgerMenu = document.querySelector(".burger-nav");
burgerMenu.addEventListener("click", () => {
  burgerMenuItems.style.display = "block";
});
burgerMenuItems.addEventListener("click", () => {
  burgerMenuItems.style.display = "none";
});

/* FAQ */
const preguntas = document.querySelectorAll(".pregunta");
preguntas.forEach((pregunta) =>
  pregunta.addEventListener("click", () => {
    const respuesta = pregunta.nextElementSibling;
    const icono = pregunta.lastElementChild;
    if (respuesta.style.display === "block") {
      respuesta.style.display = "none";
      icono.classList = "fa fa-angle-down";
    } else {
      respuesta.style.display = "block";
      icono.classList = "fa fa-angle-up";
    }
  })
);
