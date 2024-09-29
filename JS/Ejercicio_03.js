// Repaso de Objetos

const bg = "linear-gradient(11deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

//Personalización de las Salidas a Consola
console.warn("Practica 05: Repaso de Objetos en Java Script");


//VARIABLES INDEPENDIENTES
console.log("%c1.- Variables Independientes", style_console);

// Declaramos valores independientes relacionadas a un PRODUCTO

let Producto_Nombre = "Computadora Gammer Laptop 17\"";
let Producto_Marca= "ASUS"
let Producto_Modelo= "TUF 17"
let Producto_Precio= 15749.50;
let Producto_Disponibilidad= true;
let Producto_SKU= Symbol("TUF707VV-HX221W") 
let Producto_Stock = 15;
let Producto_Imagen= null;
let Producto_Barcode;
let Producto_Categorias= ["Electrónicos", "Computación", "Gamming", "Promociones Buen Fin", "Mejor Valorados"];

// Accedemos a los valores de las carácterísticas del producto de manera indepentiente
console.log(`Los datos del PRODUCTO son: \n
Nombre: ${Producto_Nombre}, Tipo de Dato <${typeof(Producto_Nombre)}>
Marca:  ${Producto_Marca}, Tipo de Dato <${typeof(Producto_Marca)}>
Modelo: ${Producto_Modelo}, Tipo de Dato <${typeof(Producto_Modelo)}>
Precio: ${Producto_Precio}, Tipo de Dato <${typeof(Producto_Precio)}>
Disponibilidad: ${Producto_Disponibilidad}, Tipo de Dato <${typeof(Producto_Disponibilidad)}>   
Stock: ${Producto_Stock}, Tipo de Dato <${typeof(Producto_Stock)}>
Barcode: ${Producto_Barcode}, Tipo de Dato <${typeof(Producto_Barcode)}>
Imagen: ${Producto_Imagen}, Tipo de Dato <${typeof(Producto_Imagen)}>
Categorias: ${Producto_Categorias}, Tipo de Dato <${typeof(Producto_Categorias)}>`);

console.log("En el caso del SKU al ser un Symbol, no se puede concatenar a la cadena de impresión anterior");
console.log(Producto_SKU);
console.log(typeof(Producto_SKU));


// Ahora lo declaramos como un OBJETO
console.log("%c2.- Objeto", style_console);

let Producto = 
{
    ID: 100,
    Nombre : "Tenis Deportivos", 
    Marca: "Nike",
    Modelo: "Jordan '24", 
    Precio: 3361.25,
    Disponibilidad: false,
    Stock: 0,
    SKU: "DZ5485-612",
    Imagen: "../assets/products/sneakers/JORDAN.png",
    Barcode:null,
    Categorias: ["Deportes", "Juvenil"]
}

// Ahora leemos el objeto completo

console.table(Producto)

// Para acceder a las propiedades del objeto utilizamos un "." y el nombre de la propiedad a leer.

console.log("Accediendo a propiedades específicas del PRODUCTO")
console.log(`Nombre Completo del PRODUCTO: ${Producto.Nombre} ${Producto.Marca} ${Producto.Modelo}`)
console.log(`Precio: ${Producto.Precio}`)
if(Producto.Disponibilidad == 0)
console.log(`Estatus: Agotado`)
else 
console.log(`Estatus: ${Producto_Stock} unidades disponibles.`);

// Desestructuración de Objetos.

console.log("%c3.- Destructuración de Objetos", style_console);

let Producto2 =
{   
    Clave: 316,
    Nombre : "Lentes para Sol", 
    Marca: "Oakley",
    Modelo: "QNTM Kato", 
    Precio: 6829.00,
    Disponibilidad: true,
    Stock: 5,
    SKU: "OO9481D-0356",
    Imagen: "../assets/products/sunglasses/KatoRed.png",
    Barcode:  888392491626,
    Categorias: ["Deportes", "Lentes", "Hombre", "Accesorios"]
}


let Comprador =
{
    ID: 3216,
    Nombre: "Marco",
    Apellidos: "Ramírez Hernández",
    Tipo: "Frecuente",
    Correo: "mar.ram@gmail.com",
    PaisOrigen: "México",
    SaldoActual: 14000.00
}

let Pedido= {
    ID:5816,
    Producto_ID: 316, 
    Comprador_ID: 3216,
    Cantidad: 2, 
    Estatus: "Carrito de Compra",
    TipoPago: "Tarjeta de Crédito"
}

// En base  a los 3 objetos necesitamos calcular el costo de la compra y si le alcanza con sus saldo a favor

let {Precio: Producto_Precio2 } = Producto2; 
let {Cantidad:Pedido_Cantidad} = Pedido;
let {SaldoActual: Cliente_SaldoActual} = Comprador;
let Costo_Compra= Producto_Precio2 * Pedido_Cantidad;

console.log(`El cliente ha agregado a su carrito de compras ${Pedido_Cantidad} undidades, con un costo total de: $${Costo_Compra}`);
if(Costo_Compra< Cliente_SaldoActual)
    console.log("El cliente tiene saldo suficiente.");

// Actualizar el valor de los Objetos

console.log("%c4.- Actualización de los valores de las propiedades de un Objeto", style_console);

console.log(`El objeto actualmente tiene los siguientes valores`)
console.log(JSON.stringify(Producto2, null, 2));
// Convierte el objeto a una cadena para evitar problemas con la referencia
console.log(`Por cuestiones de inflación el costo del producto ha  cambiado y debe ser actualizado... de $6,829.00 a $6,915.50`)
// Para podificiar el valor de un objeto basta con igualar el nuevo valor de la proppiedad deseada
Producto2.Precio=6915.50;
console.log(`Los nuevos valores del Prodcuto son:  `)
console.log(Producto2);

// ¿Puedo cambiar no solo el valor , sino el tipo de dato de un Objeto en JavaScript?
console.log(`------------------------------------------------------------`)
console.log(`El objeto actualmente tiene los siguientes valores`)
let tipoDisponibilidad = typeof(Producto2.Disponibilidad)
console.log(`El tipo de dato de la disponibilidad es: ${tipoDisponibilidad}`)
console.log(JSON.stringify(Producto2, null, 2));    // Disponiblidad Booleano
Producto2.Disponibilidad="Sí";
let nuevoTipoDisponibilidad = typeof(Producto2.Disponibilidad)
console.log(Producto2);
console.log(`El nuevo tipo de dato de la disponibilidad es: ${nuevoTipoDisponibilidad}`)

// Agregar nuevas propiedad al objeto

console.log("%c5.- Agregar nuevas propiedades al Objeto", style_console);
// Prara agregar una nueva propiedad utilizaremos el nombre del objeto los corchetes [] y el nuevo de la propiedad con su valor por defecto.
console.log("Los datos actuales del Comprador son: ")
console.table(Comprador)
Comprador['Direccion'] = "Av. Benito Juárez No. 1525, Interior 4D, Xicotepec de Juárez, Puebla, México"
Comprador['Tipo']= "Nuevo Cliente"
Comprador['ActividadReciente']= true
Comprador['TotalCompras']=3516.25
console.log("Después de haber agregado las propiedades Dirección, Tipo,  ActividadReciente y TotalCompras.... ")
console.table(Comprador)

//Eliminar propiedades existentes de un Objeto
console.log("%c6.- Eliminar propiedades existentes de un Objeto", style_console);
console.log("La estuctura y valores del objeto PEDIDO son previos a la modificación:")
console.table(Pedido)
delete Pedido.TipoPago
console.log("Después de la modificación...")
console.table(Pedido)

//
console.log("%c7.- Métodos para contronlar la mutabilidad de los Objetos, Congelación (FREEZE)", style_console);
//Si deseamos no permitir que los objetos sean modificados ni en estructura, ni en valor, utilizaremos el método FREEZE (congelar)
console.log('La estructura actual del Objeto COMPRADOR es: ')
console.table(Comprador)
Object.freeze(Comprador)
//Intenetamos agregar , eliminar o modificar los valores de sus propiedades
Comprador.FechaUltimaCompra = "05/09/2024 10:15:25"
delete Comprador.Tipo;
Comprador.Direccion= "Calle 16 de Septiembre #102, Col. Manantiales,Huauchinango, Puebla, México";
console.log('Verificamos si se realizaron los cambios en el Objeto COMPRADOR:')
console.table(Comprador)

console.log("%c8.- Métodos para controlar la mutabilidad de los Objetos, Sellado (SEAL)", style_console);
// Sin embargo , en el caso que desemos poder podificar los valores del las propiedades del Objeto, pero no su estructura, usaremos SEAL
console.log("Objeto antes de ser modificado: ")
console.table(Pedido)
//Sellamos el objeto
Object.seal(Pedido)
//Intentamos modificar su estructura
Pedido['FechaPedido']= "25/09/2024 11:05:03"
delete Pedido['Cantidad']
console.log('Verificamos si se realizaron los cambios en el Objeto PEDIDO:')
console.table(Pedido)
// Ahora intentamos modificar el valor de las propiedades
Pedido.Cantidad= 5
console.log('Verificamos si se realizaron los cambios en el Objeto PEDIDO:')
console.table(Pedido)



// Desestructuración de 2 o más objetos
console.log("%c9.- Desestructuración de 2 o más Objetos", style_console);

let {Precio: productoPrecio,  Marca: productoMarca} = Producto
let {Correo: clienteCorreo, PaisOrigen: clientePais, SaldoActual: clienteSaldo, Tipo: clienteTipo} = Comprador


// Transformar valores cuantitativos en cualitativos
if(productoPrecio>2000)
    productoPrecio = "Caro"
 else
     productoPrecio= "Barato"
 
 if(clienteSaldo > 0)
     clienteSaldo="A favor"
 else if(clienteSaldo <0)
     clienteSaldo="En contra"
 else
     clienteSaldo="Sin deuda"
 

//Transformar valores cualitativos en cuantitativos
 
 let clienteNivel;
 
 if(clienteTipo=="Premium")
     clienteNivel = 1
 if(clienteTipo=="Freemium")
     clienteNivel = 2
 if(clienteTipo=="No identificado")
     clienteNivel = 3
 
 
 // Clasificamos al cliente por su País de Origen
 if(clientePais == "México")
     clientePais="Nacional"
 else
     clientePais="Extranjero"
 

// OLE - Object Literal Enhacement      

let datosClientePromociones ={clienteCorreo, clientePais, clienteNivel, clienteSaldo ,productoMarca, productoPrecio }

// El nuevo objeto que creamos sería un ejemplo de la informacipon que enviariamos al area de Marketing para la difusión de promociones
console.log("Los datos del cliente y sus hábitos de compra son: ")
console.table(datosClientePromociones)


/*let spotifyUser  = 
{
    Name: "",    //congelado
    nickname:"",  //sellado
    email: "",   //selleado
    password: "",    //sellado
    rol: "",  //selllado
    since: "", //congelado
    playList: ["Las domingueras", "Carnita Asasa", "Pa' trapear"]  //normal modificado o eliminado
  }*/

// Operaciones sobre Objetos
// Unión de Objetos
console.log("%c10.- Unión de Objetos usando  el método de asignación (ASSING)", style_console);

console.log("Imprimimos la estructura y valores del Objeto PRODUCTO")
console.table(Producto);

console.log("Imprimimos la estructura y valores del Objeto  PEDIDO")
console.table(Pedido);
// Suponiendo que el usuarios ya realizó el pago el pedido se convertira en una VENTA que requiere información de ambos objetos
// IMPORTANTE: ASSIGN , no solo permite la fusión de 2 o más objetos, también muta los objetos orginales, perdiendo el valor original del ID en este caso
let Producto3 = {...Producto}
const Venta = Object.assign(Producto3, Pedido);
console.log("Consultamos este nuevo objeto VENTA ")
console.table(Venta);

// Unión de Objetos usando SPREAD OPERATOR para evitar la perdida de información con objetos que comparten el mismo nombre en sus propiedades
console.log("%c11.- Unión de Objetos usando  el SPREAD OPERATOR (...)", style_console);


// Parchamos el error, reiniciando el valor del producto ID al original
//Producto.ID=100;

console.table(Producto)
console.table(Comprador)
console.table(Pedido)

const Venta2 = 
{
    producto: {...Producto},
    comprador:{...Comprador},
    pedido:{...Pedido}
}                 
console.log("Fusionamos los 3 objetos en uno nuevo, sin perdida de información")
console.log(Venta2)
console.table(Venta2)




console.log("%c12.- Mutabilidad POST Unión de Objetos", style_console);



// Vamos a verificar el estatus de mutabilidad de los obetos
console.log("Vamos a verificar el estatus de mutabilidad del objeto PEDIDO")
console.log(`Esta el objeto de Pedido Congelado ? : ${Object.isFrozen(Pedido)}` );
console.log(`Esta el objeto de Pedido Sellado? : ${Object.isSealed(Pedido)}` );

console.log("Vamos a verificar el estatus de mutabilidad del objeto COMPRADOR")
console.log(`Esta el objeto de Pedido Congelado ? : ${Object.isFrozen(Comprador)}` );
console.log(`Esta el objeto de Pedido Sellado? : ${Object.isSealed(Comprador)}` );

console.log("Vamos a verificar el estatus de mutabilidad del objeto PRODUCTO")
console.log(`Esta el objeto de Pedido Congelado ? : ${Object.isFrozen(Producto)}` );
console.log(`Esta el objeto de Pedido Sellado? : ${Object.isSealed(Producto)}` );

// Modificamos la estructura de producto, agregando una nueva propiedad
Producto['isLegacy']=false;
console.log(Producto)
console.log(Venta2);