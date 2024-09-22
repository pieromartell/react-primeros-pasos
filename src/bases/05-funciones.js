//funciones en llava script

// const saludar = function saludar(nombre){
//      return `Hola, ${nombre}`;
// }


// saludar = 30

const saludar2 = (nombre)=>{
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre)=> `Hola, ${nombre}`;
const saludar4 = ()=> `Hola`;


// console.log(saludar("Piero"))
console.log(saludar2("Piero"))
console.log(saludar3("Piero"))
console.log(saludar4())

const getUSer = ()=>
    ( {
        uId: 'abc123',
        username : 'El_papi123'
    })


const user = getUSer()
console.log(user)

// function getUserActivo(nombre){
//     return {
//         uid : 'abc567',
//         username: nombre
//     }
// };

const getUserActivo = (nombre) => 
    ({
            uid : 'abc567',
            username: nombre
    })



const usuarioActivio = getUserActivo('Piero')
console.log(usuarioActivio); 