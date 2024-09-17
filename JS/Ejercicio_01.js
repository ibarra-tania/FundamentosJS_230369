//Comentarios de una sola línea

/*
 Comentarios multilinea

 */

//Ejercicio 01: Declaración de Variables

//a) Var

var miNombre= "Tania";
var misApellidos;
var miEdad=20;

//El objeto de console nos permite enviar datos a la terminal y poder  visualizar el valor de una variable o resultado de una función o método
console.warn("---Declaración de variables usando: VAR");
console.log("Intentando leer las variables: ", miNombre, misApellidos);


misApellidos="Ibarra Salgado";
console.log("Ya que ambas fueron inicializadas vuelvo a intentar leerlas: ", miNombre, misApellidos);

//Una variable puede cambiar de valor en el proceso de ejecución del programa.

//b) Const

console.warn("---Declaración de variables del tipo constante usando: CONST")
const miUniversidad="UT Xicotepec";
const miMatricula=230369;

console.log("Hola, ",miNombre, " ", misApellidos, " se que estudias actualmente en: ", miUniversidad," asignada a la matricula: ", miMatricula, " y tienes una edad de: ", miEdad, " años.");

//Para saber el tipo de datos que tiene una variable o constante podemos utilizar la función type0f()
console.log("Analizando los datos puedo deducir que: ")
console.log("miNombre es del tipo: ", typeof(miNombre))
console.log("misApellidos es del tipo:", typeof(misApellidos))
console.log("misUniversidad es del tipo:", typeof(miUniversidad))
console.log("misMatricula es del tipo:", typeof(miMatricula))
console.log("miEdad es del tipo:", typeof(miEdad))

// c) LET
let miFechaNacimiento= "2003-10-15";
let miColorFavorito;

console.warn("---Declaracion de variable locales usando: LET")
console.log("Genial, te voy conociendo mejor, ahora sé que tu naciste el: ", miFechaNacimiento, " y tu colorFavorito es: mmmmmm dejame pensar...")
miColorFavorito="Naranja";
console.log(`Creo que es ${miColorFavorito}, le atine?`)
//La manera de mezclar textos fijos con el valor actual de las cariables se le conoce como: interpolación y deben iniciar y finalizar en un backtic - tilde inversa

console.log("Analizando los datos puedo deducir que: ");
console.log("miColorFavorito es del tipo: ", typeof(miColorFavorito));
console.log("miFechaNacimiento es del tipo: ", typeof(miFechaNacimiento));