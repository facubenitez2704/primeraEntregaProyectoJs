// una bienvenida al usuario

let bienvenida = prompt ("Bienvenidx!! cual es tu nombre?");
alert ("Exelente, un placer" + " " +  bienvenida);
alert ("Te deseamos una exelente experiencia!");

//descripcion de productos disponibles tipo base de datos 

const guitarraGibson ={ codigo: 3445, modelo: "semihollow 335", color: "negra", año: 1997, origen: "usa", precio: "5000 usd", stock:2};
const guitarraFender ={ codigo: 3446, modelo: "stratocaster custom shop", color: "azul oceano", año: 1989, origen: "usa", precio:"4700 usd", stock:1};
const pedalReverb= { codigo: 4567, marca: "strymon", modelo: "reverb big sky", efecto: "reverb", origen: "usa", precio:"450 usd", stock:3};
const pedalDelay={ codigo: 4568, marca:"strymon", modelo: "timeline", efecto: "delay", origen: "usa", precio:"400 usd", stock: 3};
const cables={ codigo: 5678, modelo: "flex", marca:"fender", color: "azul", origen: "usa", precio:"50 usd", stock: 2};
const amplificador={ codigo: 6666, modelo: "mark five", marca: "mesa boogie", potenica: "25w", origen: "usa", precio: "2000 usd", stock:1};

const arrayProductosDatos=[guitarraGibson, guitarraFender, pedalReverb, pedalDelay, cables, amplificador]
console.log(arrayProductosDatos);


//prodcutos disponibles para el usuario

const productosUsuario=["guitarra gibson 335", "guitarra fender custom shop "," reverb big sky","delay time line", "cable fender", "amplificador mesa boogie" ];

//se los mostramos para que seleccione.

for (let i = 0; i < productosUsuario.length; i++)
alert(productosUsuario[i] + " " + "disponible");
alert( guitarraGibson,guitarraFender,pedalDelay,pedalReverb,cables,amplificador);
let eleccionUsuarioFicticia = prompt("que queres comprar de los productos disponibles?");
console.log("selecciono" + eleccionUsuarioFicticia);
alert("exelente elegiste" + " " + eleccionUsuarioFicticia);
//se agrega al carrito
function usuarioEleccion(){
    if( eleccionUsuarioFicticia != ""){
agregarAlCarrito(eleccionUsuarioFicticia)
    }
    else{
        alert("bueno muchas gracias de todas formas!")
    }
}
function agregarAlCarrito(seleccion){
    console.log("se agrego al carrito" + seleccion)

}

usuarioEleccion();

//descontamos del stock,vamos a borrar el elemnto seleccionado de array de datos.
// supongamos que el usuario compro cables, vamos a sacarlos del stock.

function borrarDelStock(borrar){
    const index = arrayProductosDatos.findIndex((arrayProductosDatos) => arrayProductosDatos === borrar);
    arrayProductosDatos.splice(index,1);
    console.log(arrayProductosDatos);


}
borrarDelStock(cables);
//agregamos otro elemento nuevo al stock

const teclado ={ codigo: 7878, modelo: "micro korg", marca: "korg", origen: "china", precio: "600 usd"};
arrayProductosDatos.unshift(teclado);
console.log(arrayProductosDatos.length);

// cree una funcion paara verificar el stock con la base de datos interna imporvisada que arme con los objetos.

function stockP(cantidad, dato){
    if( cantidad <= dato.stock){
        console.log("hay stock")
    }
else{ 
    console.log("no hay mas stock");
}

}
stockP(1, guitarraGibson);
stockP(3, guitarraFender);
stockP(1, amplificador);



