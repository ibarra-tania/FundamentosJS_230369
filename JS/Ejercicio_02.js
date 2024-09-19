//tipos de datos en JS

//1. Undefined  (Null))
console.warn("--- Tipo de dato UNDEFINEND")
let cliente;
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

cliente="Tania Ibarra";
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

cliente=19227
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

//console.log(`El cliente ha realizado ${NumCompras} en este mes.`)

//undefined es el tipo de dato que por defecto se asigna a variables no inicializadas o no declaradas

//2. Booleanos--Boolean (TRUE OR FALSE)
console.warn("---Tipo de dato: BOOLEAN(Boleano - true/false)")
let esPremium="No lo sé";
console.log(`¿Es el cliente Premium?: ${esPremium}`)
console.log(`El tipo de dato de la variable esPrremiun es: ${typeof(esPremium)}`);

console.log(`Asignado el valor \"true\" a la variable. `)
esPremium="true"
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`)

console.log(`Asignado el valor true a la variable. `)
esPremium=true
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`)

console.log(`¿Es el cliente Premium?: ${esPremium}`)
console.log(`Cambiando el valor de esPremium a false`);

esPremium=0;
if(esPremium)
    console.log("El cliente pagó por usar el servicio.");
else
    console.log("El cliente recibe los servicios gratuitos.");

//3. Number (Números)
var cantidad;
const costo_producto=10.50
let saldo_cuenta= -2500.40
let monto_transaccion;

console.warn("--- Tipo de dato - NUMBER(números, positivos, decimales, flotantes)");
console.log(`Tu saldo al día de hoy es de: ${saldo_cuenta}, (Tipo de Dato - ${typeof(saldo_cuenta)})`);
console.log(`El producto que has seleccionado cuesta: ${costo_producto}`)
cantidad=8;
console.log(`Has elegido comprar: ${cantidad} de productos.`)
console.log(`El importe total de la compra es: ${(cantidad*costo_producto)}`)
saldo_cuenta=saldo_cuenta - (cantidad*costo_producto);
console.log(`Tu nuevo saldo es de: ${saldo_cuenta}`);

//el cliente realiza un abono de 1500
monto_transaccion=1500;
console.log(`Tu abono de: ${monto_transaccion} ha sido recibido, tu nuevo saldo es de: ${(saldo_cuenta+monto_transaccion)}`);


//STRING (Cadena de Caracteres)
const alumno= "Tania Ibarra Salgado";
let producto;

console.warn("--- Tipo de Dato - STRING (Cadena de Caracteres)");
console.log(`El nombre del alumno es: ${alumno}, que es un tipo de dato ${typeof(alumno)}`);


//inicializamos el valor de la variable producto
producto= "MONITOR 20\" FULL HD"
console.log(`El nombre del PRODUCTO es: ${producto}, que es un tipo de dato ${typeof(producto)}`);

//manipulando los Strings
console.log(`Más adelante podremos transformar el contenido de los STRING usando los métodos y funciones especificas, como convertir su valor a mayúsculas: ${alumno} => ${alumno. toUpperCase()}`);
console.log(`O en su defecto a minúsculas: ${producto}=>${producto.toLowerCase()}`)

// 5. BIGINT (Número de dimensiones Amplias)

console.warn("---Tipo de Dato - BIGINT (Número Amplio)")
const numeroGrande=1234567890;
const numeroGrande2=12345678901234567890;
let numeroGrande3=123456789012345678901234567890;
let numeroGrande4=1234567890123456789012345678901234567890

console.log(`El primer experimento de un número grande es: ${numeroGrande}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande)}`);
console.log(`El segundo experimento de un número grande es: ${numeroGrande2}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande2)}`);
console.log(`El tercer experimento de un número grande es: ${numeroGrande3}, que no es soportado por NUMBER, perdiendo precisión y su tipo de dato es: ${typeof(numeroGrande3)}`);
console.log(`El cuarto experimento de un número grande es: ${numeroGrande4}, que si es soportado por NUMBER, perdiendo precisión y su tipo de dato es: ${typeof(numeroGrande4)}`);


numeroGrande3=BigInt("123456789012345678901234567890")
console.log(`El quinto experimento de un número grande es: ${numeroGrande3}, que ya fue convertido a BIGINT, y su tipo de dato es: ${typeof(numeroGrande3)}`);

numeroGrande4=BigInt("1234567890123456789012345678901234567890")
console.log(`El sexto experimento de un número grande es: ${numeroGrande4}, que ya fue convertido a BIGINT, y su tipo de dato es: ${typeof(numeroGrande4)}`);

//¿Se pueden realizar operaciones matemáticas entre un BIGINT y Number

const numero= 129;
console.log(`Intentando realizar la suma de: numero + numeroGrande3, el resultado es: ${BigInt(numero)+numeroGrande3}`)


// 6. SYMBOL (Símbolo)
console.warn("---Tipo de Dato - SYMBOL (Símbolo o Único)")
const numero1=5;
const numero2=5.0;
const numero3="5";
const numero4="5.0";
const numero5=Symbol(5)
const numero6=Symbol(5)
const numero7=Symbol(5.0)
const numero8=Symbol("5")
const numero9=Symbol("5.0")

// Pruebas comparativas 
console.log("¿Es 5 = 5.0?")
if(numero1 == numero2)
    console.log("Se comparo numero1 con numero2, determinando que tienen el mismo valor.")
else
    console.log("Se comparo numero1 con numero2, determinando que no tienen el mismo valor.")


console.log("¿Es 5 = \"5\"?")
    if(numero1 == numero3) //Estrictamente igual (equidad)= Mismpo valor, mismo tipo de datos
        console.log("Se comparo numero1 con numero3, determinando que tienen el mismo valor.")
    else
        console.log("Se comparo numero1 con numero3, determinando que no tienen el mismo valor.")


console.log("¿Es 5 === \"5\"?")
    if(numero1 === numero3)
        console.log("Se comparo numero1 con numero3, determinando que tienen el mismo valor.")
    else
        console.log("Se comparo numero1 con numero3, determinando que tienen el mismo valor, pero NO el mismo tipo de dato.")

console.log("¿Es 5 = \"5.0\"?")
    if(numero1 == numero4)
        console.log("Se comparo numero1 con numero4, determinando que tienen el mismo valor.")
    else
        console.log("Se comparo numero1 con numero4, determinando que no tienen el mismo valor.")

console.log("¿Es 5 === \"5.0\"?")
    if(numero1 === numero4)
        console.log("Se comparo numero1 con numero4, determinando que tienen el mismo valor.")
    else
        console.log("Se comparo numero1 con numero4, determinando que tienen el mismo valor, pero NO el mismo tipo de dato.")

console.log(`¿Es 5 === Symbol(5)?, antes de compararlos analizamos que tipo de dato son: siendo numero1 del tipo: ${typeof(numero1)} y numero5 del tipo de dato: ${typeof(numero5)}`)
    if(numero1 == numero5)
        console.log("Se comparo numero1 con numero5, determinando que tienen el mismo valor.")
    else
        console.log("Se comparo numero1 con numero5, determinando que tienen el mismo valor, pero NO el mismo tipo de dato.")