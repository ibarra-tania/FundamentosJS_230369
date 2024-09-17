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