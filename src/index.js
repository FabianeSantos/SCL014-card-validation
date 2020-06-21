import validator from "./validator.js";

// variable que guarda los digitos de la tarjeta.
let creditCardNumber;

// funcion para hacer cambio de una pantalla a otra
const move = (close, open) => {
  document.getElementById(close).style.display = "none";
  document.getElementById(open).style.display = "block";
};

//función para el boton validar, 
const btnValidation = document.getElementById("btnValidation");
// función con metodo addEventListener.
btnValidation.addEventListener("click", () => {
  // captura del valor(digitos) de la tarjeta del usuario
  creditCardNumber = document.getElementById("creditCardNumber").value;

  //mensaje de error en la primera pantalla
  let mensajeError = document.getElementById("mensajeError");
  //mensaje para cuanda es valida la tarjeta
  let resultadoFinal = document.getElementById("showResult");
  let cardFlag = document.getElementById("cardFlag");
  // transforma el valor del usuario en number y captura el primero indice
  let firstNumber = parseInt(creditCardNumber.charAt(0));
  //longitud del numero
  let numero = creditCardNumber.length > 13 && creditCardNumber.length <= 16;
  // mensaje para cuando es invalida la tarjeta
  let resultado;

  /*condional, donde el usario digita de 0 a 16 numeros, si es verdadero, cambia a la pantalla 'respuesta', y 
  ejecuta el validator y un mensaje de acuerdo con el analisis del algoritmo de luhn, marca de la tarjeta */
  if (numero && firstNumber === 3) {
    move("welcome", "validationResult");
    cardFlag = " American Express";
    resultado = validator.isValid(creditCardNumber);
    if (resultado) {
      resultadoFinal.innerHTML = `
        <h1>La tarjeta: ${validator.maskify(creditCardNumber)} </h1>
        <h1>Marca: ${cardFlag} </h1>
        <h1 style="color: green;">VALIDA</h1>
        `
    } else {
      resultadoFinal.innerHTML = `
        <h1>La tarjeta: ${validator.maskify(creditCardNumber)} </h1>
        <h1 style="color: red;">INVALIDA</h1>
        `
    }

  } else if (numero && firstNumber === 4) {
    move("welcome", "validationResult");
    cardFlag = " VISA";
    resultado = validator.isValid(creditCardNumber);
    if (resultado) {
      resultadoFinal.innerHTML = `
        <h1>La tarjeta: ${validator.maskify(creditCardNumber)} </h1>
        <h1>Marca: ${cardFlag} </h1>
        <h1 style="color: green;">VALIDA</h1>
        `
    } else {
      resultadoFinal.innerHTML = `
        <h1>La tarjeta: ${validator.maskify(creditCardNumber)} </h1>
        <h1 style="color: red;">INVALIDA</h1>
        `
    }
  } else if (numero && firstNumber === 5) {
    move("welcome", "validationResult");
    cardFlag = " MASTERCARD";
    resultado = validator.isValid(creditCardNumber);
    if (resultado) {
      resultadoFinal.innerHTML = `
        <h1>La tarjeta: ${validator.maskify(creditCardNumber)} </h1>
        <h1>Marca: ${cardFlag} </h1>
        <h1 style="color: green;">VALIDA</h1>
        `
    } else {
      resultadoFinal.innerHTML = `
        <h1>La tarjeta: ${validator.maskify(creditCardNumber)} </h1>
        <h1 style="color: red;">INVALIDA</h1>
        `
    }
  } else if (numero && firstNumber !== (3, 4, 5)) {
    move("welcome", "validationResult");
    resultadoFinal.innerHTML = `
    <h1>La tarjeta: ${validator.maskify(creditCardNumber)} </h1>
    <h1 style="color: red;">INVALIDA</h1>
    `
  } else {
    // si false, imprime un mensaje pde error
    mensajeError.innerHTML =
      "Por favor, ingrese el numero de la tarjeta con 16 digitos";
  }
});

// función para volver a la primera pantalla
const final = document.getElementById("btnIniciar");
final.addEventListener("click", () => move("validationResult", "welcome"));

// función para salir del validador
const closePage = document.getElementById("btnCerrar");
closePage.addEventListener("click", () => close("validationResult"));

