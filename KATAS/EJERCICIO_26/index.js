//! Ejercicio 26

// Usa un bucle para recorrer el array de productos (products) y añade al array goodProducts los que tengan más de 20 ventas (sellCount) y al array badProducts los que tengan menos.

let goodProducts = []
let badProducts = []
const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]

for (const product of products) {
  if (product.sellCount < 20) {
    badProducts.push(product)
  }
  if (product.sellCount >= 20) {
    goodProducts.push(product)
  }
}
console.log(goodProducts)
console.log(badProducts)
