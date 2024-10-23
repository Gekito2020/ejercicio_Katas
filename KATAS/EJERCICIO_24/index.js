//Ejercicio 24

// Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos.
let sumAll = 0
const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]

for (const product of products) {
  sumAll += product.sellCount
}
console.log('EL TOTAL DE VENTAS DE TODOS LOS PRODUCTOS ES:')
console.log(sumAll)
