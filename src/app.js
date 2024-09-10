/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let nombres = ["el perro", "el gato", "el cartero", "el pez"];
  let verbos = ["se canso", "se durmio", "se estrello", "se salio"];
  let predicado = [
    "en el parque",
    "en el hospital",
    "en la casa",
    "en la escuela"
  ];

  let nombresIndice = Math.floor(Math.random() * nombres.length);
  let verbosIndice = Math.floor(Math.random() * verbos.length);
  let predicadoIndice = Math.floor(Math.random() * predicado.length);

  document.querySelector("#excusa").innerHTML =
    nombres[nombresIndice] +
    " " +
    verbos[verbosIndice] +
    " " +
    predicado[predicadoIndice];

  console.log("Hello Rigo from the console!");
};
