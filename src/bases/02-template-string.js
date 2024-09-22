const nombre = 'Piero';
const apellido = 'Martell'

const nombreCompleto = `
${nombre} 
${apellido}
${1+2}`

console.log(nombreCompleto)

console.log(` Hola Mundo `)
//templeta string

function getSaludo(nombre){
    return `Hola Mundo, soy ${nombre}`
}
console.log(`Este es un texto : ${getSaludo(nombre)}`)