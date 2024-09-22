const personajes = ['Goku','Vegeta','Trunsk'];

// console.log(personajes[0])
// console.log(personajes[1])
// console.log(personajes[2])

const [,,p2] = personajes;
console.log(p2)

const retornaArreglo = ()=>{
    return ['ABC',123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//Tarea

const EstadoUsuario = (valor) =>{
    return [valor, ()=>{console.log('Hola Mundo')}]
}
const [nombre, setNombre] = EstadoUsuario('Goku')

console.log(nombre);
setNombre();