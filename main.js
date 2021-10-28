//funciones
//funciones descueto del 25%
function Descuento() {
    let Precio = parseFloat (prompt ("ingrese precio"));
    let PrecioDelDescuento =  Precio *25/100;
    console.log("el descuento es: " + PrecioDelDescuento)
}

Descuento();

//arrays
class producto{
    constructor(nombre,tipo,precio){
      this.nombre = nombre;
      this.tipo = tipo;
      this.precio = parseFloat (precio);
    }

    agregar(){
   console.log("se agrego al carrito" + this.nombre + this.tipo )
  }

    sumar(){
      console.log(this.precio = this.precio + this.precio )
    }
}  

 const productos = [];
 productos.push(new producto("fernet", "chico", "800"))
 productos.push(new producto("cocacola", "grande", "250"))

 for(const producto of productos)
  producto.sumar();

//DOM
let seccion = document.getElementById("container");
  console.log(seccion.innerHTML);
  console.log(seccion.innerText);
  seccion.style.background = "green";