// Lista de ovejas
const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'}
  ]

// Función para filtrar ovejas de color rojo y que contengan la 'n' o 'a' en su nombre
function contarOvejas(ovejas) {
  ovejas = ovejas.filter(oveja => oveja.color=='rojo' && oveja.name.toLowerCase().includes('n') && oveja.name.toLowerCase().includes('a'))
  return ovejas
}

// Llamada a la función
const ovejasFiltradas = contarOvejas(ovejas)

// Resultado de la función
console.log(ovejasFiltradas)
