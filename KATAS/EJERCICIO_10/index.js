//! Ejercicio 10

//! Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6]
function getAverage(numbers) {
  let sum = 0
  for (const number of numbers) {
    sum += number
  }
  const media = sum / numbers.length
  return media
}
const mediaTotal = getAverage(numbers)
console.log(mediaTotal)
