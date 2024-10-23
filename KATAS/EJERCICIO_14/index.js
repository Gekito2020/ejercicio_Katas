// Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función:

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]
function repeatCounter(array, word) {
  //! IMPORTANTE COMENZAR CONTADOR FUERA DEL BUCLE
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    if (word === array[i]) {
      sum++
    }
  }
  return sum
}

console.log(`La palabra "${word}" se repite ${sum} veces.`)
