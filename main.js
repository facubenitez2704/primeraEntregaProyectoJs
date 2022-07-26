// una bienvenida al usuario
//descripcion de productos disponibles tipo base de datos 


function alertUno(){
Swal.fire ({
    title: 'BIENVENIDX, CUAL ES TU NOMBRE?',
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off'},
    showCancelButton: true,
    confirmButtonText: 'Enviar',
    showLoaderOnConfirm: true,
    preConfirm: (login) => {
      return fetch(`//api.github.com/users/${login}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.statusText)
          }
          return response.json()
        })
        .catch(error => {
          Swal.showValidationMessage(
            `Request failed: ${error}`
          )
        })
    },
    allowOutsideClick: () => !Swal.isLoading()
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: `${result.value.login}'s avatar`,
        imageUrl: result.value.avatar_url ="../img/pngeggslash.png"
      })
    }
  });
}
function alertDos(){
Swal.fire ({
  title: 'que estas buscando?',
  input : 'text',
  inputAttributes: {
    autocapitalize: 'off'},
  showCancelButton: true,
  confirmButtonText: 'Enviar',
  showLoaderOnConfirm: true,
  preConfirm: (login) => {
    return fetch(`//api.github.com/users/${login}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json()
      })
      .catch(error => {
        Swal.showValidationMessage(
          `Request failed: ${error}`
        )
      })
  },
  allowOutsideClick: () => !Swal.isLoading()
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: `${result.value.login}'exelente aqui encotraras todo lo que buscas!`,
    })
  }
});
}



const guitarraGibson ={ codigo: 3445, modelo: "semihollow 335", color: "negra", año: 1997, origen: "usa", precio: "5000 usd", stock:2, tipe: "guitarra"};
const guitarraFender ={ codigo: 3446, modelo: "stratocaster custom shop", color: "azul oceano", año: 1989, origen: "usa", precio:"4700 usd", stock:1, tipe: "guitarra"};
const pedalReverb= { codigo: 4567, marca: "strymon", modelo: "reverb big sky", efecto: "reverb", origen: "usa", precio:"450 usd", stock:3,tipe: "pedal"};
const pedalDelay={ codigo: 4568, marca:"strymon", modelo: "timeline", efecto: "delay", origen: "usa", precio:"400 usd", stock: 3, tipe: "pedal"};
const cables={ codigo: 5678, modelo: "flex", marca:"fender", color: "azul", origen: "usa", precio:"50 usd", stock: 2, tipe: "cable"};
const amplificador={ codigo: 6666, modelo: "mark five", marca: "mesa boogie", potenica: "25w", origen: "usa", precio: "2000 usd", stock:1, tipe: "amplificador"};

const arrayProductosDatos=[guitarraGibson, guitarraFender, pedalReverb, pedalDelay, cables, amplificador]
//practicando acceso condicional a un objeto
console.log(arrayProductosDatos);
console.log(guitarraGibson?.codigo || "la propiedad no existe");
console.log(guitarraFender?.potencia || "la propiedad no existe");
//desestructuracion
const{modelo, precio} =guitarraGibson
const{marca, precio:valor} = pedalDelay  //le agregue un alias a precio

console.log(modelo);
console.log(marca);
console.log(valor);

//spread de objetos
const guitarraGibsonLesPaul={
    ...guitarraGibson,
    codigo:3443,
    modelo: "les paul",
    precio: "3500 usd",
}
console.log(guitarraGibsonLesPaul);


//prodcutos disponibles para el usuario
const productosUsuario=["guitarra gibson 335", "guitarra fender custom shop "," reverb big sky","delay time line", "cable fender", "amplificador mesa boogie" ];

//desestructuracion de array
const [a, b, c] = productosUsuario;
console.log(a);
console.log(b);
console.log(c);

const desestructuracion = [...productosUsuario];
console.log(desestructuracion);




//se los mostramos para que seleccione.
for (let i = 0; i < productosUsuario.length; i++)
console.log(productosUsuario[i] + " " + "disponible");
let eleccionUsuarioFicticia = ""
// alert 2

console.log("selecciono" + eleccionUsuarioFicticia);


//se agrega al carrito




//operador ternario
function usuarioEleccion(){
    eleccionUsuarioFicticia != "" ?  agregarAlCarrito(eleccionUsuarioFicticia) : console.log("bueno muchas gracias de todas formas!")
    console.log(eleccionUsuarioFicticia);
    }
    function agregarAlCarrito(seleccion){
        console.log("se agrego al carrito" + seleccion)
        
    }
/*
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
*/






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
/*
function stockP(cantidad, dato){
    if( cantidad <= dato.stock){
        console.log("hay stock")
    }
else{ 
    console.log("no hay mas stock");
}}
*/ //operador ternario
function stockP(cantidad, dato){
    cantidad <= dato.stock ? console.log("hay stock") : console.log("no hay mas stock");
}

stockP(1, guitarraGibson);
stockP(3, guitarraFender);
stockP(1, amplificador); 
stockP(5, pedalDelay);
stockP(10, pedalReverb);











//dom
let prueba= document.all;
console.log(prueba)
prueba=document.querySelector("header");
console.log(prueba);

//vamos a cambiar el titulo

const tituloNuevo=document.querySelector("h1").textContent="BEFA MUSIC";
console.log(tituloNuevo);
//vamos a remover alguna etiqueta
const borrarSub=document.querySelector("h2");
borrarSub.remove();
console.log(borrarSub);



//vamos a agregar algun parrafo

let agregado=document.createElement("p")
agregado.innerHTML="<h3>Bienvenido a nuestra tienda virtual de instrumentos musicales para el guitarrista</h3>";
const pAgregado=document.querySelector("header");
console.log(pAgregado.children);
pAgregado.insertBefore(agregado,pAgregado.children[2]);
console.log(agregado);
/*
//vamos a crear un array en forma de lista tipo li en productos
let arrayPadre=document.getElementById("divVacio");
let arrayAgregado=["guitarra fender","guitarra gibson","amplificador mesa boogie","reverb big sky","delay timeline"];
for (const arrayNuevo of arrayAgregado){
    let li=document.createElement("li");
    li.innerHTML=arrayAgregado;
    arrayPadre.appendChild(li);
}
//vamos a agregar el array de obejetos que tnemos a la seccion productos desde dom
let section=document.getElementById("sectionVacio");
for (const sectionA of arrayProductosDatos){
    let liDos=document.createElement("li");
    liDos.innerHTML=arrayProductosDatos;
    section.appendChild(liDos);
console.log(section);
}
*/





//eventos
//card


const productos = [
     { codigo: 3445, nombre:"guitarraGibson", modelo: "semihollow 335", color: "negra", año: 1997, origen: "usa", precio: 5000, stock:2, img: src="../img/descarga.png",category:"guitarra" },

     { codigo: 3446, nombre:"guitarraFender", modelo: "stratocaster custom shop", color: "azul oceano", año: 1989, origen: "usa", precio: 4500 , stock:1, img: src="../img/Fendercustom.jpg", category:"guitarra"},

     { codigo: 4567, nombre:"pedalReverb", marca:"strymon", modelo:"reverb big sky", efecto: "reverb", origen: "usa", precio:450 , stock:3, img: "https://eddiesguitars.com/media/catalog/product/cache/1/thumbnail/1200x/17f82f742ffe127f42dca9de82fb58b1/i/m/img_6699.jpg",category:"pedales"},

    { codigo: 4568, nombre:"pedalDelay", marca:"strymon", modelo:"timeline", efecto:"delay", origen: "usa", precio:400 , stock: 3, img:"https://www.heavenimagenes.com/heavencommerce/bf05a8b6-ecb8-4713-82f8-c2ad017db15b/images/v2/STRYMON/1602241527296032_01_medium.jpg",category:"pedales"},

    { codigo: 5678, nombre:"cables" , modelo:"flex", marca:"fender", color: "azul", origen: "usa", precio:50 , stock: 2, img:"https://www.homemusic.pe/files/productos/20191231150430.jpg",category:"accesorios"},

   { codigo: 6666,  nombre:"amplificador" , modelo: "mark five", marca: "mesa boogie", potencia: "25w", origen: "usa", precio: 2000 , stock:1, img:"https://guitars.azureedge.net/aza/user/gear/mesa-1-006.jpg?maxwidth=500",category:"amplificadores"},


];



const carrito= JSON.parse(localStorage.getItem("carrito")) ?? [];
const favoritos= [];

/*
const carrito =  [];
document.addEventListener(`DOMContentLoaded`, () =>{
  if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"))
    actualizarCarrito()
  }
})*/

const contadorCarrito = document.getElementById("buttonCarrito")

const contenedorCarrito = document.getElementById("carritoAcumulador")
const contenedorFavoritos = document.getElementById("favoritosAcumulador")
const botonVaciar = document.getElementById("vaciarCarrito")
const botonVaciarFav = document.getElementById("vaciarFavoritos")
const precioTotal = document.getElementById("buttonPrecio")

botonVaciar.addEventListener("click", () =>{
  carrito.length = 0
  toastiTres()
  actualizarCarrito()
})
botonVaciarFav.addEventListener("click", () =>{
  favoritos.length = 0
  actualizarFavoritos()
})



productos.forEach((producto) => {
    const idButton = `add-cart${producto.codigo}`
    document.getElementById("sectionVacio").innerHTML += ` 
     <div class="card" style="width: 20rem">
    <div class="precio">
    <p> precio Usd: ${producto.precio}</p>
    </div>
    <img src="${producto.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <a  class="btn btn-primary" id=${idButton}>Agegar al Carrito</a>
      <a  class="btn btn-primary" id=${producto.codigo}>Favoritos</a>
      <a  class="btn btn-primary"  onclick = "verProductos(${producto.codigo})">Ver Prodcuto</a>
    </div>
  </div>`



  const botonFavoritos = document.getElementById(`${producto.codigo}`)
botonFavoritos.addEventListener( `click`,() =>{
  favoritosAgr(producto.codigo)





  
})

})
//favoritos

// favoritos acumulador///////////////////////////////////////////////////////////////
const actualizarFavoritos =() => {
  favoritos.forEach((producto) => {
    const div = document.createElement("div")
    div.innerHTML = ` 
     <div class="card" style="width: 20rem">
    <div class="precio">
    <p>${producto.precio}</p>
    </div>
    <img src="${producto.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <a  class="btn btn-primary"  onclick = "eliminarCarrito (${producto.codigo})">Eliminar </a>
  
    </div>
  </div>`
  contenedorFavoritos.appendChild(div)
  })
  }

const favoritosAgr =(prodCod) => {
  const item = productos.find((producto) => producto.codigo === prodCod)
  favoritos.push(item)
  actualizarFavoritos();
  console.log(favoritos)
}


// carrito acumulador///////////////////////////////////////////////////////////////


const actualizarCarrito = () => {

contenedorCarrito.innerHTML = " "

carrito.forEach((producto) => {
  const div = document.createElement("div")
  div.className = ("productosEnCarrito")
  div.innerHTML = ` 
   <div class="card" style="width: 20rem">
  <div class="precio">
  <p>${producto.precio}</p>
  </div>
  <img src="${producto.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${producto.nombre}</h5>
    <a  class="btn btn-primary"  onclick = "eliminarCarrito(${producto.codigo})">Eliminar </a>

  </div>
</div>`
contenedorCarrito.appendChild(div)
contadorCarrito.innerText = carrito.length
precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0)
})

}
//eliminar carrito//
const eliminarCarrito =(prodCod) => {
  const item = carrito.find((productos) => productos.codigo === prodCod)
  const indice = carrito.indexOf(item)
  carrito.splice(indice, 1)
  toastiDos()
actualizarCarrito()
}
function toastiDos(){
  Toastify({
  text: "Tu producto fue eliminado del carrito " + "",
  duration: 3000,
  destination: "https://github.com/apvarun/toastify-js",
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "left", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  },
  onClick: function(){

  }}
).showToast();
}

function toastiTres(){
  Toastify({
  text: "Tu carrito esta vacio+" + "",
  duration: 3000,
  destination: "https://github.com/apvarun/toastify-js",
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "left", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  },
  onClick: function(){

  }}
).showToast();
}

/////////////////////////////////////
productos.forEach((producto) => {
  const idButton = `add-cart${producto.codigo}`
  document.getElementById(idButton).onclick = () => {
    alertTres();
    toasti()
    actualizarCarrito();
      carrito.push(producto);
      document.getElementById("buttonCarrito").innerHTML = carrito.length
      localStorage.setItem("carrito", JSON.stringify(carrito));
      console.log(carrito)
      
  }
})



function toasti(){
    Toastify({
    text: "Agregaste al carrito " + "",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){

    }}
  ).showToast();
}


// alert 3
function alertTres(){
  Swal.fire({
      title: "Tu Producto a sido Agregado",
      width: 600,
      padding: '5rem',
      color: '#3606a9',
      background: '#fff url("../img/gui.png.png")',
      backdrop: `
      rgba(0,0,123,0.4)
      url("../img/pngeggslash.png")
      left top
      no-repeat
      `
    })
  }
  


// ver productos/////////////////////////////////////////////////////////////
function verProductos(codigo){
  
    const favoritosProductos = productos.findIndex((producto) => producto.codigo === codigo);
    localStorage.setItem(`verProductos`, JSON.stringify(productos[favoritosProductos]));
    location.href = "caracteristicas.html";
}



// vamos a generar las categorias implicandoles un evento

function filtrarPorCategoria(categoria){
   document.getElementById("sectionVacio").innerHTML = "";
    const productosFiltrados = productos.filter((producto) => producto.category === categoria);

productosFiltrados.forEach((producto) => {
    const idButton = `add-cart${producto.codigo}`
    document.getElementById("sectionVacio").innerHTML += `  <div class="card" style="width: 20rem">
    <div class="precio">
    <p>${producto.precio}</p>
    </div>
    <img src="${producto.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <a  class="btn btn-primary" id=${idButton}>Agegar al Carrito</a>
    </div>
  </div>`
})}

console.log(document.getElementsByClassName("filtrar-categoria"));

for(const nodoHtml of document.getElementsByClassName("filtrar-categoria")){
    nodoHtml.onclick =(event) => {
        const categoria = event.target.getAttribute("data-categoria")
        filtrarPorCategoria(categoria)
    }
}

///////////////////////////////
alertUno();
actualizarCarrito()

///////////////////////////////////////
//api de ejemplo de star wars

/*
const buscarApiMeli=() =>{
fetch(`https://swapi.dev/api/people/`)
.then((response) => response.json())
.then(informacion => {
  console.log(informacion)

  let acumuladorSw = "";
  informacion.results.forEach((productoSw) =>{
    console.log(productoSw)
    acumuladorSw += `  <div class="card" style="width: 20rem">
    <div class="precio">
    <p>${productoSw.height}</p>
    </div>
    <img src="${productoSw.films}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${productoSw.name}</h5>
    </div>
  </div>`
})
document.getElementById("sectionVacio").innerHTML = acumuladorSw;
})
  }



buscarApiMeli();
/*

/*
 const curl =() =>{
  fetch (`https://swapi.dev/api/people/`)
  .then((response) => response.json())
  .then(informacionDos => {
    console.log(informacionDos)
  })
}
curl();
*/




 //fetch con json



const buscarApiPoke=() =>{
  fetch("../productos.json")
  .then((response) => response.json())
  .then(informacion => {
    console.log(informacion)
  
    let acumuladorPk = informacion;
  document.getElementById("footerJ").innerHTML = acumuladorPk;
  })
    }
  
  
  
  buscarApiPoke();

 //buscador//

 const inputBuscar = document.querySelector("#buscador");
const buscar =document.querySelector("#btnBuscar");
const resultadoBuscador =document.querySelector("#resultado")

const filtrar = () => {

  resultadoBuscador.innerHTML= "";
  
  const texto = inputBuscar.value.toLowerCase();
  for(let producto of productos){
    let nombre = producto.nombre.toLowerCase();
    if(nombre.indexOf(texto) !== -1){
      resultadoBuscador.innerHTML += `
       <li><a href="../pages/productos.html" >
       ${producto.nombre}
   </a>  - valor: ${producto.precio} - <img src="${producto.img}" class="imgB" alt="..."></li>`
    }
  }
  if(resultadoBuscador.innerHTML === ""){
    resultadoBuscador.innerHTML += `<li> Producto no encontrado ..</li>
    `
  }
}
buscar.addEventListener(`click`, filtrar)
inputBuscar.addEventListener(`keyup`,filtrar )
