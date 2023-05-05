/*
1) Realizar una funcion que reciba un numero y escriba una piramide desde 1 hasta ese numero de la siguiente forma:
para valor 6
1
12
123
1234
12356

para valor 3
1
12
123
*/

function piramide() {
    const n = prompt("Por favor ingrese un número entero:");
  
    if (n === "0" || n === "1") {
      console.log(`no hay pirámide para ${n} 😔`);
    } else {
      let piramide = "";
      for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
          piramide += `${j} `;
        }
        piramide += "\n";
      }
      console.log(piramide);
    }
  }
  
  /*
  2) Escribir una funcion que reciba 2 array y devuelva un array con todos los elementos que coinciden entre ellos

Ejemplo:
Array1: ['rojo', 'azul', 'amarillo']
Array2: ['blanco', 'negro', 'rojo']
Resultado: ['rojo']

Ejemplo 2:
Array1: [4, 3, true, 'manzana']
Array2: ['pera', 3, f alse, true, 3, true]
Resultado: [3, true]
*/

function iguales(arg1, arg2) {
  
  const seRepiten = [];
    for(let i = 0; i < arg1.length; i++) {
      for(let j = 0; j < arg2.length; j++) {
        
        if (arg1[i] === arg2[j] && !seRepiten.includes(arg1[i])) {
          seRepiten.push(arg1[i]);
        }
      }
    }
    return seRepiten;
  }

//3)
  
class Carrito {
  constructor(montoTotal, productos) {
    this.montoTotal = montoTotal;
    this.productos = productos;
  }  
  agregarProducto(nombre, precio, unidades) {
    this.productos.push(nombre);
    this.montoTotal = this.montoTotal + precio * unidades;
  }
}



const carrito = new Carrito(10, ["Leche"]);

carrito.agregarProducto("Azucar",5,2);
console.log(carrito);