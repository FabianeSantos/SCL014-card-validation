const validator = {
  isValid: creditCardNumber => {
    // numeros digitados por el usuario(creditCardNumber) son tranformados en un array de strings, con el metodo .split('').
    const array_CreditCardNumber = creditCardNumber.split("");

    /* se usa metodo .filter(), donde es creado un nuevo array con elementos, de acuerdo con la condición dada. 
  No cambia los elementos del 1ª array. Los recoje y almacena en nuevo array(pares).*/
    const indice_Par = array_CreditCardNumber.filter(
      (elem, indice) => indice % 2 === 0
    );

    /*se usa el metodo .map(), que verifica todos los elementos, y con una función damos un parametro y 
    retorna (elemento *2, del array)*/
    const indice_Par_veces_Dos = indice_Par.map(elem => elem * 2);

    // con el metodo .filter(), separamos los elementos <10
    const indice_Par_menores_Diez = indice_Par_veces_Dos.filter(
      elem => elem < 10
    );

    // con el metodo .filter(), separamos los elementos >= a 10
    const indice_Par_Mayores_Diez = indice_Par_veces_Dos.filter(
      resposta => resposta >= 10
    );

    // los elementos >= 10 son analizados y retorna (elemento -9)
    const indice_Par_MenosNueve = indice_Par_Mayores_Diez.map(elem => elem - 9);

    // metodo .concat(), concatena los numeros (< 10 con los  >=  10)
    const paresResult = indice_Par_menores_Diez.concat(indice_Par_MenosNueve);

    /* se usa metodo array.filter, donde se crea un nuevo array con elementos, de acuerdo con la condición dada.No cambia los 
elementos del 1ª array. Los recoje y almacena en nuevo array(impares).*/
    const resultImpares = array_CreditCardNumber.filter(
      (elem, indice) => indice % 2 !== 0
    );

    /*se usa el metodo .map(), que verifica todos los elementos, y con una funcion damos un parametro. 
    Los elementos impares son analizados y retorna  (elemento * 1).*/
    const imparesResult = resultImpares.map(elem => elem * 1);

    // metodo .concat(), concatena los numeros de los arrays  finales de impares y pares
    const concat_Impares_Pares = paresResult.concat(imparesResult);


    // metodo .reduce(), con dos parametros, y retorna la suma de los 2
    const finaResult = concat_Impares_Pares.reduce(
      (valorAnterior, valorActual) => valorAnterior + valorActual
    );


    // condicional, donde si es verdadera retorna true, si falsa, retorna false.
    if (finaResult % 10 === 0) {
      return true;
    } else {
      return false;
    }
  },

  //metodo para ocultar numero .
  maskify: creditCardNumber => {

    for (let i = 0; i <= creditCardNumber.length; i++) {
      let numbersFirst = creditCardNumber.slice(0, 12);
      let numberslast = creditCardNumber.slice(-4);
      numbersFirst = '############';
      return numbersFirst + numberslast;
    }
  }
};

export default validator;









